import { useState } from "react";

import IntervalSelector from "./IntervalSelector.tsx";


export default function App() {

  const [interval, setInterval]  = useState(1);

  return (
    <div className={"AppContainer"}>
      <div>Aktueller Wert: {interval}</div>
      <form>
          <IntervalSelector interval={interval}
            onIntervalChange={newInterval => setInterval(newInterval)}
          />
      </form>
    </div>
  );
}
