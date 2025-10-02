import { CustomEditor, CustomToolbar } from './components/CustomEditor';
import CustomSidebar from './components/CustomSidebar';

function App() {
  return (
    <div
      className={`flex flex-row h-screen bg-zinc-200 dark:bg-zinc-900
        transition-colors duration-300`}
    >
      <CustomSidebar />
      <main
        className="flex grow shrink flex-col overflow-y-auto overflow-x-hidden
          p-10 text-white space-y-6"
      >
        <CustomToolbar />
        <CustomEditor />
      </main>
    </div>
  );
}

export default App;
