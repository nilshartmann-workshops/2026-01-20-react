

type PlantCardProps = {
  name: string;
  location: string;
  wateringInterval: number;
  lastWatered?: string;
}


// export default function PlantCard (props: PlantCardProps)  {
export default function PlantCard (
  {name, location, wateringInterval, lastWatered}: PlantCardProps)  {

  const lastWateredHinweis = () => lastWatered ?
    <div>Zuletzt {lastWatered}</div> :
    <div>Noch nie gegossen :-(</div>

  return (
    <div className={"PlantCard"}>
      <header>
        <h1>{name}</h1>
        <div>{location}</div>
      </header>
      <section>
        <div>
          {wateringInterval===1
            ? "Jeden Tag"
            : `Alle ${wateringInterval} Tage`}
        </div>
        {lastWateredHinweis()}
      </section>
    </div>
  );
}
