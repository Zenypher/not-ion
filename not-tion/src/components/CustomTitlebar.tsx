import { getCurrentWindow } from "@tauri-apps/api/window";

function CustomTitlebar() {
    const appWindow = getCurrentWindow();
  return (
    <div className="flex  w-full [&>button]:hover:cursor-pointer [&>button]:p-1 [&>button]:border-l-1 [&>button]:border-r-1 border-b-1" >
      <button className="hover:bg-red-600 transition-colors duration-100 ease-out" onClick={() => {appWindow.close()}}>X</button>
      <button onClick={() => {appWindow.toggleMaximize()}}>S</button>
      <button onClick={() => {appWindow.minimize()}}>M</button>
      <div className="bg-gray-300 w-screen" data-tauri-drag-region></div>
    </div>
  );
}

export default CustomTitlebar;
