import PlantCard from "./PlantCard.tsx";
import { Plant } from "../types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import { Activity, useState } from "react";

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

export default function App() {

  const [interval, setInterval]  = useState(1);

  return (
    <div className={"AppContainer"}>
      <div>Aktueller Wert: {interval}</div>
      <form>
          <IntervalSelector interval={interval}
            onIntervalChange={newInterval => setInterval(newInterval)}
          />
      </form>
    </div>
  );
}
