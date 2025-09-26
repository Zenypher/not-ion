'use client';

import { X } from 'lucide-react';
import { db } from '../ds';
import { useLiveQuery } from 'dexie-react-hooks';

export default function CustomSidebar() {
  const docs = useLiveQuery(async () => {
    return await db.documents.toArray();
  });

  return (
    <>
      <nav className="p-4 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-y-4 overflow-y-auto">
          <button
            className="lg:ml-auto hover:cursor-pointer hover:bg-red-600
              hover:text-white transition-colors duration-200 ease-out bg-white
              p-2 rounded-xl self-start sm:ml-0 focus:inset-ring-1
              focus:outline-none focus:inset-ring-red-500"
            onClick={() => alert('You clicked me')}
          >
            <X />
          </button>
          {docs && docs?.length > 0 ? (
            <ul
              className="custom-scrollbar overflow-y-auto flex flex-col
                [&>li]:bg-white/10 p-2 [&>li]:hover:cursor-pointer
                [&>li]:hover:bg-white/20 text-white gap-2 font-light
                [&>li]:rounded-md"
            >
              {docs?.map((doc) => (
                <li key={doc.id} className="p-2 list-disc">
                  {doc.content}
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="text-white bg-white/25 h-screen flex items-center
                justify-center rounded-xl font-medium"
            >
              No items currently.
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <hr className="text-white/20 border-2 rounded-full" />
          <div className="flex p-2 gap-4">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
              alt="icon"
              className="w-12 bg-blue-100 rounded-xl hover:cursor-pointer
                hover:scale-105 transition-transform duration-100 ease-out"
            />
            <div
              className="flex flex-col text-white [&>h3]:font-bold
                [&>p]:font-light [&>*]:truncate [&>*]:lg:w-50 [&>*]:sm:w-21"
            >
              <h3>John Doe is a big master of disguise</h3>
              <p>johndoe@email.comdasdasdas</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
