import { useState } from "react";

// 1. Phase: Render Phase => Virtual DOM
// 2. Phase: Commit => "echten" DOM

export default function IntervalSelector() {

  console.log(new Date().toLocaleTimeString());

  // State (Zustand)   --> Model
  // const state = useState(1);
  // const interval = state[0];
  // const setInterval = state[1];

  const [interval, setInterval]  = useState(1);

  const handle7DaysClick = () => {
    // SERVER CALL...
    setInterval(interval+1);
  }

  function handle1DayClick() {
    setInterval(1);
  }

  function handleNDaysClick(days: number) {
    setInterval(days);
  }


  return <div>
    <label>Interval</label>
    <input type={"number"}
           value={interval}
           onChange={event => {
             setInterval(parseInt(event.target.value))}}/>
    <p>Gießen: alle {interval} Tage</p>
    <button type="button" onClick={handle1DayClick}>Jeden Tag</button>
    <button type="button" onClick={() => handleNDaysClick(3)}>Alle 3 Tage</button>
    <button type="button" onClick={handle7DaysClick}>Alle 7 Tage</button>
    <button type="button" onClick={() => setInterval(14)}>Alle 14 Tage</button>
  </div>

}