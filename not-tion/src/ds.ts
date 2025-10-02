// db.ts
import Dexie, { type EntityTable } from 'dexie';

interface Document {
  id?: number;
  content: string;
}

const db = new Dexie('DocumentDatabase') as Dexie & {
  documents: EntityTable<
    Document,
    'id'
  >;
};

db.version(1).stores({
  documents: '++id, content'
});

export type { Document };
export { db };