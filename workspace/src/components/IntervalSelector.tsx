import { useState } from "react";

export default function IntervalSelector() {

  // State (Zustand)   --> Model
  // const state = useState(1);
  // const interval = state[0];
  // const setInterval = state[1];

  const [interval, setInterval]  = useState(1);

  const handle7DaysClick = () => {
    setInterval(7);
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
           onChange={event => setInterval(Number(event.target.value))}/>
    <p>Gießen: alle {interval} Tage</p>
    <button type="button" onClick={handle1DayClick}>Jeden Tag</button>
    <button type="button" onClick={() => handleNDaysClick(3)}>Alle 3 Tage</button>
    <button type="button" onClick={handle7DaysClick}>Alle 7 Tage</button>
    <button type="button" onClick={() => setInterval(14)}>Alle 14 Tage</button>
  </div>

}