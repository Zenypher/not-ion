// db.ts
import Dexie, { type EntityTable } from 'dexie';

interface Document {
  id?: number;
  content: string;
}

const db = new Dexie('DocumentDatabase') as Dexie & {
  documents: EntityTable<
    Document,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  documents: '++id, content' // primary key "id" (for the runtime!)
});

export type { Document };
export { db };