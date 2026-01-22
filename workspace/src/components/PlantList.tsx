import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import { useState } from "react";

export default function PlantList() {

  const [allPlants, setAllPlants] = useState<Plant[]>([])

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
    console.log("Nach dem Promise!")
    // ^--- Promise

    // ...

  }

  return <div>
    <button className={"primary"} onClick={handlePlantLoadClick}>Load Plants</button>
    <PlantCardList plants={allPlants} />
  </div>
}
