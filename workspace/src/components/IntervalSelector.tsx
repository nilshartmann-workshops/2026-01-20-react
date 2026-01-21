import { useState } from "react";

// 1. Phase: Render Phase => Virtual DOM
// 2. Phase: Commit => "echten" DOM

type IntervalSelectorProps = {
  interval: number;
  onIntervalChange: (newInterval:number)=>void
}

// onIntervalChange(7)

export default function IntervalSelector(props: IntervalSelectorProps) {

  console.log(new Date().toLocaleTimeString());

  // State (Zustand)   --> Model
  // const state = useState(1);
  // const interval = state[0];
  // const setInterval = state[1];



  const handle7DaysClick = () => {
    // SERVER CALL...
    props.onIntervalChange(7);
  }

  function handle1DayClick() {
    props.onIntervalChange(1);
  }

  function handleNDaysClick(days: number) {
    props.onIntervalChange(days);
  }


  return <div>
    <label>Interval</label>
    <input type={"number"}
           value={props.interval}
           onChange={event => {
             props.onIntervalChange(parseInt(event.target.value))}}/>
    <p>Gießen: alle {props.interval} Tage</p>
    <button type="button" onClick={handle1DayClick}>Jeden Tag</button>
    <button type="button" onClick={() => handleNDaysClick(3)}>Alle 3 Tage</button>
    <button type="button" onClick={handle7DaysClick}>Alle 7 Tage</button>
    <button type="button" onClick={() => props.onIntervalChange(14)}>Alle 14 Tage</button>
  </div>

}