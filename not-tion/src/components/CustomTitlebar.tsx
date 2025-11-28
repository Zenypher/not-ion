'use client';

import { getCurrentWindow } from '@tauri-apps/api/window';
import { X, Maximize, Minimize, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CustomTitlebar() {
  const appWindow = getCurrentWindow();

  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const checkIsMaximized = async () => {
      try {
        const isMax = await appWindow.isMaximized();
        if (mounted) setIsMaximized(isMax);
      } catch (error) {
        console.error('ERROR: ', error);
      }
    };

    checkIsMaximized();

    return () => {
      mounted = false;
    };
  });

  return (
    <>
      <div
        className="absolute top-0 right-0 p-2 flex gap-2 draggable-element
          place-content-end w-full z-[0] [&>*]"
      >
        <button
          className="titlebar-btn non-draggable-element"
          onClick={() => {
            appWindow.minimize();
          }}
        >
          <Minus />
        </button>
        <button
          className="titlebar-btn non-draggable-element"
          onClick={() => {
            appWindow.toggleMaximize();
            console.log(isMaximized);
          }}
        >
          {isMaximized ? <Minimize /> : <Maximize />}
        </button>
        <button
          className="titlebar-btn non-draggable-element"
          onClick={() => {
            appWindow.close();
          }}
        >
          <X />
        </button>
      </div>
    </>
  );
}
