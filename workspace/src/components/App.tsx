import PlantCard from "./PlantCard.tsx";
import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";

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

  return (
    <div className={"AppContainer"}>
      <form>
      <IntervalSelector />
      </form>
      {/*<PlantCardList plants={allPlants} />*/}
      {/*<PlantCard*/}
      {/*  name="Aloe Vera"*/}
      {/*  location="Schlafzimmer" wateringInterval={7}*/}
      {/*/>*/}
    </div>
  );
}
