import Dexie, { type EntityTable } from 'dexie';

interface Note {
  id: number;
  title: string;
  noteText: string;
}

const db = new Dexie('NotesDatabase') as Dexie & {
  notes: EntityTable<Note, 'id'>;
};

db.version(1).stores({
  notes: '++id, title, noteText',
});

export type { Note };
export { db };
