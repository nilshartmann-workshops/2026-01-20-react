import PlantCard from "./PlantCard.tsx";
import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import { useState } from "react";

export default function App() {

  const allPlants: Plant[] = [
    {
      id: "1",
      name: "Aloe Vera",
      location: "Schlafzimmer",
      wateringInterval: 12,
      lastWatered: "2025-06-16",
    },
    {
      id: "2",
      name: "Orchidee",
      location: "Wohnzimmer",
      wateringInterval: 20,
    },
  ];

  const [isIntervalSelectorOpen, setIsIntervalSelectorOpen] = useState(true)

  return (
    <div className={"AppContainer"}>
      <button
        onClick={() => setIsIntervalSelectorOpen(!isIntervalSelectorOpen)}
      >IntervalSelector ein/ausschalten</button>
      <form>
        {isIntervalSelectorOpen ? <IntervalSelector /> : null}
      </form>
      {/*<PlantCardList plants={allPlants} />*/}
      {/*<PlantCard*/}
      {/*  name="Aloe Vera"*/}
      {/*  location="Schlafzimmer" wateringInterval={7}*/}
      {/*/>*/}
    </div>
  );
}
