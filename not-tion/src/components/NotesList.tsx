export default async function NotesList() {
  return (
    <>
      {allNotes.length > 0 ? (
        <ul
          className="custom-scrollbar overflow-y-auto flex flex-col
            [&>li]:bg-white/10 p-2 [&>li]:hover:cursor-pointer
            [&>li]:hover:bg-white/20 text-white gap-2
            font-light[&>li]:rounded-md"
        >
          {allNotes.map((note) => (
            <li key={note.id}>{note.title}</li>
          ))}
        </ul>
      ) : (
        <div
          className="text-zinc-950 dark:text-zinc-50 flex h-screen
            justify-center items-center rounded-xl font-medium select-none"
        >
          No documents available.
        </div>
      )}
    </>
  );
}
