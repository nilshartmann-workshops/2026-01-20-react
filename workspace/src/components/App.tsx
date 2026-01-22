import { useState, useTransition } from "react";

import IntervalSelector from "./IntervalSelector.tsx";
import { produce } from "immer";

type Person = {
  firstname: string;
  lastname: string;
  age: number;
  addresses: Array<{
    city: string;
    street: string
  }>
}

export default function App() {

  const [interval, setInterval]  = useState(1);
  const [person, setPerson] = useState<Person>({
    firstname: "Klaus",
    lastname: "Müller",
    age: 33
  });

  const handleFirstnameChange = (newName: string) => {
    // VERBOTEN!!!!!!!!!!!
    // person.firstname = newName;
    // setPerson(person);
    // ERLAUBT:
    const newPerson = {
      firstname: newName,
      lastname: person.lastname,
      age: person.age
    }
    setPerson(newPerson);

    setPerson({
      firstname: newName,
      age: person.age
    })

    setPerson({
      ...person,
      firstname: newName
    })

    setPerson(function(prevPerson) {
      return {
        ...prevPerson,
        firstname: newName
      }
    })

    const newPerson2 = {
      ...person,
      addresses: [
          ...person.addresses,
          { city: "Hamburg", street: "Hautpstraße"}
      ]
    }

    // immer.js
    setPerson(produce(person, draft => {
      draft.firstname = "Susi";
      draft.addresses[0].city = "...";
    }));
  }


  return (
    <div className={"AppContainer"}>
      <p>Hallo, {person.firstname}</p>
      <div>Aktueller Wert: {interval}</div>
      <form>
          <IntervalSelector interval={interval}
            onIntervalChange={newInterval => setInterval(newInterval)}
          />
      </form>
    </div>
  );
}
