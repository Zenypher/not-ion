import { getCurrentWindow, Window } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import { X, Maximize, Minimize, Minus, NotepadText } from "lucide-react";

export default function CustomTitlebar() {
  const [win, setWin] = useState<Window | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const init = async () => {
      const w = await getCurrentWindow();
      setWin(w);
      setIsMaximized(await w.isMaximized());
    };
    init();
  }, []);

  if (!win) return null;

  return (
    <header className="fixed top-0 right-0 left-0 flex z-50 h-10 bg-gradient-to-b from-black/20 justify-between">
      <div
        data-tauri-drag-region
        className="w-full flex self-stretch items-center gap-x-2 text-white"
      >
        <NotepadText className="ml-4" />
        <p>not-tion</p>
      </div>
      <div className="flex [&>button]:p-2 self-stretch text-gray-400 [&>button]:hover:text-white ">
        <button
          className="hover:bg-gray-700/35 transition-colors ease-in-out duration-200"
          onClick={() => win.minimize()}
        >
          <Minus size={16} />
        </button>
        <button
          className="hover:bg-gray-700/35 transition-colors ease-in-out duration-200"
          onClick={async () => {
            await win.toggleMaximize();
            setIsMaximized(await win.isMaximized());
          }}
        >
          {isMaximized ? <Minimize size={16} /> : <Maximize size={16} />}
        </button>
        <button
          className="hover:bg-red-600 transition-colors ease-in-out duration-200"
          onClick={() => win.close()}
        >
          <X size={16} />
        </button>
      </div>
    </header>
  );
}
