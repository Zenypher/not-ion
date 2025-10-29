import { CustomEditor, CustomToolbar } from './components/CustomEditor';
import CustomSidebar from './components/CustomSidebar';

function App() {
  return (
    <div
      className={`grid grid-cols-[auto_1fr] h-screen bg-zinc-200
        dark:bg-zinc-900 transition-colors duration-300`}
    >
      <CustomSidebar />
      <main
        className="grid grid-rows-[auto_1fr] gap-6 overflow-y-auto
          overflow-x-hidden p-10"
      >
        <CustomToolbar />
        <CustomEditor />
      </main>
    </div>
  );
}

export default App;
