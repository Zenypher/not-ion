import React from "react";
import { app } from "@tauri-apps/api";

async function isTauri() {
  try {
    await app.getName();
    return true;
  } catch {
    return false;
  }
}

function AppContainer({children}: {children : React.ReactNode}) {
    console.log(isTauri());
    return <div className={`flex flex-col min-h-screen ${isTauri() ? "mt-10" : ""}`}>{children}</div>
}

export default AppContainer;
