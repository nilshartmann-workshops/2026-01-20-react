import { useEffect, useState } from "react";

export function useWindowTitle(newWindowTitle: string) {

  const [x, setX] = useState("XXXX");

  useEffect(() => {
    console.log("Use Effect Called");
    window.document.title = `${newWindowTitle}`;

    // Clean Up Function
    return () => {
      console.log("Clean Up")
      window.document.title = "Plant Manager"
    }
  }, [newWindowTitle]);
}
