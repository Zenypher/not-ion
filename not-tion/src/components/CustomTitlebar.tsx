'use client';

import { getCurrentWindow } from '@tauri-apps/api/window';
import { X, Maximize, Minus } from 'lucide-react';

export default function CustomTitlebar() {
  const appWindow = getCurrentWindow();

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
          }}
        >
          <Maximize />
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
