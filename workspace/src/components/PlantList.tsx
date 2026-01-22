import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import { useEffect, useState } from "react";
import { loadDiffConfig } from "vitest/internal/browser";
import { useWindowTitle } from "./useWindowTitle.ts";


// return <div><h1>Hello World</h1></div>

// const virtualDom = {
//   "name": "div", children: {name: "h1", children: "Hello World"}
// }

// 1. Phase "rendern" => Virtual DOM
// 2. Phase "commit" => "echten" DOM
export default function PlantList() {



  const [allPlants, setAllPlants] = useState<Plant[]>([])

  useWindowTitle(`Pflanzenliste`);
  // function isPlantArray(data: any): data is Plant[] {
  //   if (Array.isArray(data)) {
  //     if (typeof data[0] === "object") {
  //       if ("name" in data[0]) {
  //         return true
  //       }
  //     }
  //   }
  //
  //   return false
  // }
  //
  // function checkData() {
  //   const x: unknown  = "...";
  //   if (isPlantArray(x)) {
  //     x
  //   }
  //
  // }

  useEffect(  () => {

    async function loadData() {
      const result = await fetch("http://localhost:7200/api/plants");
      const data = await result.json() ;
      const plants = PlantSchema.array().parse(data);

      setAllPlants(plants);
    }

    loadData();


    // fetch("http://localhost:7200/api/plants")
    //   .then(result => {
    //     return result.json()
    //   })
    //   .then(data => {
    //     setAllPlants(data);
    //   })
  }, []);


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
    <button className={"primary"} onClick={handlePlantLoadClick}>Load Plants</button>
    <PlantCardList plants={allPlants} />
  </div>
}
