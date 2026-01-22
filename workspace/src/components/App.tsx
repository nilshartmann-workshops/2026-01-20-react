import { useState } from "react";

import IntervalSelector from "./IntervalSelector.tsx";
import PlantList from "./PlantList.tsx";
import PlantForm from "./PlantForm.tsx";

type View = "liste"|"formular"

export default function App() {
  // const [count, setCount] = useState(1);

  const [activeTab, setActiveTab] = useState<View>("liste");

  return (
    <div className={"AppContainer"}>
      <button className={"primary"} onClick={() => setActiveTab("liste")}>Liste</button>
      <button className={"primary"} onClick={() => setActiveTab("formular")}>Formular</button>
      {/*<button className={"primary"} onClick={() => setCount(count+1)}>Count {count}</button>*/}

      {activeTab === "liste" && <PlantList />}
      {activeTab === "formular" && <PlantForm />}
    </div>
  );
}
