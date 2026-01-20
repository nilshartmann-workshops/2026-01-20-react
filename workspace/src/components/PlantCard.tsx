export let person = "Klaus"

export default function PlantCard ()  {
  // let person = "Klaus";

  // JSX / TSX

  return (
    <div className={"PlantCard"}>
      <header>
        <h1>Aloe Vera</h1>
        <div>Schlafzimmer</div>
      </header>
      <section>
        <div>Alle 5 Tage gießen</div>
        <div>Zuletzt: 22.05.2025</div>
      </section>
    </div>
  );
}
