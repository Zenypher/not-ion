import React, { useEffect, useState } from "react";
import { app } from "@tauri-apps/api";

async function isTauri() {
  try {
    await app.getName();
    return true;
  } catch {
    return false;
  }
}

function AppContainer({ children }: { children: React.ReactNode }) {
  const [tauri, setTauri] = useState<boolean>(false);

  useEffect(() => {
    isTauri().then(setTauri);
  }, []);

  return (
    <body className={`flex flex-row ${tauri ? "" : "bg-slate-700"}`}>
      {children}
    </body>
  );
}

export default AppContainer;
