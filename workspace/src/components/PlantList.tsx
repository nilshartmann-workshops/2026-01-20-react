import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import { useEffect, useState } from "react";
import { loadDiffConfig } from "vitest/internal/browser";
import { useWindowTitle } from "./useWindowTitle.ts";
import { useSuspenseQuery } from "@tanstack/react-query";


// return <div><h1>Hello World</h1></div>

// const virtualDom = {
//   "name": "div", children: {name: "h1", children: "Hello World"}
// }

// 1. Phase "rendern" => Virtual DOM
// 2. Phase "commit" => "echten" DOM
export default function PlantList() {



  // const [allPlants, setAllPlants] = useState<Plant[]>([])

  useWindowTitle(`Pflanzenliste`);

  // Suspense
  // TanStack Query
  //   (React Query)

  const {data} = useSuspenseQuery({
    queryKey: ["plant-list"],
    async queryFn() {
      const result = await fetch("http://localhost:7200/api/plants?slow=5000");
      const data = await result.json() ;
      const plants = PlantSchema.array().parse(data);
      return plants;
    }
  });

  return <div>
    <PlantCardList plants={data} />
  </div>
}
