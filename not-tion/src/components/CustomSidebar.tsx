'use client';

import { useState } from 'react';
import clsx from 'clsx';
import DarkModeToggle from './DarkModeToggle';
import { Menu } from 'lucide-react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../backend/db';
import { motion } from 'motion/react';
import { setEditorContent } from '@/lib/text-editor-utils';
import { editor } from '@/components/EditorComponent';

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
          `p-4 bg-gradient-to-br from-zinc-200/75 to-transparent
          dark:from-zinc-900 transition-colors duration-300 shadow-2xl
          border-r-1 border-zinc-100/25 grid backdrop-blur-sm draggable-element
          z-1 overflow-y-hidden gap-4`,
          isHidden ? 'w-full' : ''
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

        <ul
          className={clsx(
            'grid grid-cols-1 gap-2 overflow-y-auto no-scrollbar',
            isHidden ? 'hidden' : ''
          )}
        >
          {notes?.map((note) => (
            <button
              key={note.id}
              className="bg-gradient-to-br from-zinc-100 to-transparent
                dark:from-zinc-900 p-2 hover:shadow-md active:from-blue-500
                active:to-blue-600 active:text-zinc-100 rounded-lg
                cursor-pointer inset-shadow-xs inset-shadow-zinc-50/35 shadow-sm
                font-medium text-zinc-900 dark:text-zinc-100 h-10 transition-all
                duration-100 select-none w-40 truncate text-ellipsis"
              onClick={() => {
                setEditorContent(note.noteText, editor);
              }}
            >
              {note.title}
            </button>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
