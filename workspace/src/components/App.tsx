import { Activity, Suspense, useState } from "react";

import IntervalSelector from "./IntervalSelector.tsx";
import PlantList from "./PlantList.tsx";
import PlantForm from "./PlantForm.tsx";

type View = "liste" | "formular";

export default function App() {
  // const [count, setCount] = useState(1);

  const [activeTab, setActiveTab] = useState<View>("liste");

  return (
    <div className={"AppContainer"}>
      <h1>Plant Manager Enterprise</h1>
        <button className={"primary"} onClick={() => setActiveTab("liste")}>
          Liste
        </button>
        <button className={"primary"} onClick={() => setActiveTab("formular")}>
          Formular
        </button>
        {/*<button className={"primary"} onClick={() => setCount(count+1)}>Count {count}</button>*/}
        <Activity mode={activeTab === "liste" ? "visible" : "hidden"}>
          <Suspense fallback={<h1>Please wait...</h1>}>
          <PlantList />
          </Suspense>
        </Activity>

      <Activity mode={activeTab === "formular" ? "visible" : "hidden"}>
        <PlantForm />
      </Activity>

      {/*{activeTab === "liste" && <PlantList />}*/}
      {/*{activeTab === "formular" && <PlantForm />}*/}
    </div>
  );
}
