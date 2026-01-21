import PlantCard from "./PlantCard.tsx";

export default function App() {

  const plant = {
    name:"Aloe Vera",
    location:"Schlafzimmer",
    wateringInterval:7,
    lastWatered:"22.05.2025",
  }

  //
  //
  return (
    <div className={"AppContainer"}>
      <PlantCard {...plant}  />
      {/*<PlantCard name={plant.name} location={plant.location} wateringInterval={plant.wateringInterval}/>*/}
      <PlantCard
        name="Aloe Vera"
        location="Schlafzimmer"
        wateringInterval={7}

      />
    </div>
  );
}
