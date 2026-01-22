import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import { useState } from "react";

export default function PlantList() {

  const [allPlants, setAllPlants] = useState<Plant[]>([])

  function loadMultipleThings() {
    const userPromise = fetch("http://localhost:7200/api/plants/1?slow=2000")
      .then(data => data.json()).then(p => console.log("Request 1 fertig"))

    const plantPromise = fetch("http://localhost:7200/api/plants/2?slow=1000")
      .then(data => data.json()).then(p => console.log("Request 2 fertig"))

    // Promise.all([userPromise, plantPromise])
    //   .then( allPromiseResults => {
    //     console.log("Alle fertig");
    //   });

  }

  const handlePlantLoadClickAsync = async () => {
    // ASYNC / AWAIT
    try {
      const result = await fetch("http://localhost:7200/api/plants");
      const data = await result.json();
      setAllPlants(data);
    } catch (err) {
      // ...
    }
  }

  const handlePlantLoadClick = () => {
    // ky (externe Bibliothek)
    // fetch API (Browser)
    // axios (externe Bibliothek)


    console.log("Netzwerk Request Start")
    const promise = fetch("http://localhost:7200/api/plants")
    promise
      .then(result => {
        return result.json()
      })
      .then(data => {
        setAllPlants(data);
      })
      .catch(err => {
        // ...
      })

    // ...
    console.log("Nach dem Promise!")
    // ^--- Promise

    // ...

  }

  return <div>
    <button className={"primary"} onClick={loadMultipleThings}>Load Plants</button>
    <PlantCardList plants={allPlants} />
  </div>
}
