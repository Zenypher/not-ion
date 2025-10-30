'use client';

import { useState } from 'react';
import clsx from 'clsx';
import DarkModeToggle from './DarkModeToggle';
import { Menu } from 'lucide-react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../backend/db';
import { motion } from 'motion/react';

export default function CustomSidebar() {
  const [isHidden, setHidden] = useState<boolean>(true);

  const notes = useLiveQuery(async () => {
    return await db.notes.toArray();
  });

  const toggleSidebar = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      <motion.nav
        // animate={{ width: isHidden ? '72px' : '100%' }}
        // transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={clsx(
          `w-full p-4 bg-gradient-to-br from-zinc-200/75 to-transparent
          dark:from-zinc-900 transition-colors duration-300 shadow-2xl
          border-r-1 border-zinc-100/25 grid backdrop-blur-sm draggable-element
          z-1`,
          isHidden ? 'w-10' : ''
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
            className="custom-bttn non-draggable-element"
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
              w-40 truncate text-ellipsis"
          >
            <ul className="flex flex-col">
              {notes?.map((note) => (
                <button key={note.id} className="">
                  ID: {note.id} | {note.noteText}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
