'use client';

import { useState } from 'react';
import clsx from 'clsx';
import DarkModeToggle from './DarkModeToggle';
import { Menu } from 'lucide-react';

export default function CustomSidebar() {
  const [isHidden, setHidden] = useState<boolean>(true);

  const toggleSidebar = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      <nav
        className={clsx(
          `p-4 bg-zinc-200 dark:bg-zinc-900 transition-colors duration-300
          shadow-2xl border-r border-zinc-500/25 grid`,
          isHidden ? 'w-18' : ''
        )}
      >
        <div
          className={clsx(
            'place-self-start gap-4',
            isHidden
              ? 'flex flex-col h-full justify-between'
              : 'grid grid-cols-2'
          )}
        >
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
        <div className={clsx('', isHidden ? 'hidden' : '')}>
          <div
            className="flex flex-col dark:text-zinc-50 text-zinc-950 select-none
              w-[10rem] truncate text-ellipsis"
          >
            <h3 className="font-bold">John Doe is a big master of disguise</h3>
            <p className="font-extralight">johndoe@email.comdasdasdas</p>
          </div>
        </div>
      </nav>
    </>
  );
}
