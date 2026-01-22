import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

export default function PlantList() {

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

  return <div>
    <PlantCardList plants={allPlants} />
  </div>
}
