import { useEffect, useState } from "react";

import IntervalSelector from "./IntervalSelector.tsx";
import { useWindowTitle } from "./useWindowTitle.ts";


export default function PlantForm() {
  // use => Hook Funktionen
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [wateringInterval, setWateringInterval] = useState(1);

  // window.document.title = "Plant Form";

  // useEffect(() => {
  //   console.log("Use Effect Called");
  //   window.document.title = `${name} - Editor`;
  //
  //   // Clean Up Function
  //   return () => {
  //     console.log("Clean Up")
  //     window.document.title = "Plant Manager"
  //   }
  // }, [name]);


  const onSaveClick =  () => {

    window.document.title = "...";

    const newPlant = {
      name: name,
      location: location,
      wateringInterval: wateringInterval
    }

    fetch("http://localhost:7200/api/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(response => console.log(response.statusText))
  };

  return (
    <form>
      <div className={"FormControl"}>
        <label>Name der Pflanze</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={"FormControl"}>
        <label>Standort</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <IntervalSelector
        interval={wateringInterval}
        onIntervalChange={(newWateringInterval) =>
          setWateringInterval(newWateringInterval)
        }
      />

      <div className={"FormButtons"}>
        <button type={"button"} className={"primary"} onClick={() => onSaveClick()}>
          Pflanze hinzufügen 🌱
        </button>
      </div>
    </form>
  );
}
