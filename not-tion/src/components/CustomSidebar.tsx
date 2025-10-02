'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import DarkModeToggle from './DarkModeToggle';
import { Menu } from 'lucide-react';

export default function CustomSidebar() {
  const sidebarRef = useRef<HTMLInputElement | null>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  {
    /* Hide sidebar logic */
  }
  const [isHidden, setHidden] = useState<boolean>(false);

  const toggleSidebar = () => {
    setHidden(!isHidden);
  };

  const startResizing = useCallback((mouseDownEffect: MouseEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current!.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <nav
        ref={sidebarRef}
        className={clsx(
          `p-4 bg-zinc-200 dark:bg-zinc-900 transition-colors duration-300
          shadow-2xl grow-0 shrink-0 border-r border-zinc-500/25`,
          'sidebar',
          `w-[${sidebarWidth}px]`,
          isHidden ? 'w-18' : ''
        )}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className={isHidden ? 'flex flex-col gap-4 h-full' : 'flex gap-4'}>
          <button
            className="custom-bttn"
            onClick={() => {
              toggleSidebar();
            }}
          >
            <Menu />
          </button>
          <DarkModeToggle />
        </div>
        <div
          className={clsx(
            'flex flex-col gap-y-4',
            'sidebar-content',
            isHidden ? 'hidden' : ''
          )}
        >
          <div className="flex justify-center gap-x-6"></div>
          <hr className="dark:text-zinc-50/50 text-zinc-950/50" />
          <ul
            className="custom-scrollbar overflow-y-auto flex flex-col
              [&>li]:bg-white/10 p-2 [&>li]:hover:cursor-pointer
              [&>li]:hover:bg-white/20 text-white gap-2
              font-light[&>li]:rounded-md"
          >
            <div
              className="text-zinc-950 dark:text-zinc-50 flex h-screen
                justify-center items-center rounded-xl font-medium select-none"
            >
              No documents available.
            </div>
          </ul>
          <hr className="dark:text-zinc-50/50 text-zinc-950/50" />
          <div className="flex flex-row gap-4">
            <div
              className="flex flex-col dark:text-zinc-50 text-zinc-950
                select-none truncate text-pretty"
            >
              <h3 className="font-bold">
                John Doe is a big master of disguise
              </h3>
              <p className="font-extralight">johndoe@email.comdasdasdas</p>
            </div>
          </div>
        </div>
        <div
          className="sidebar-resizer"
          onMouseDown={() => {
            startResizing;
          }}
        ></div>
      </nav>
    </>
  );
}
