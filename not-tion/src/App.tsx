import CustomEditor from './components/CustomEditor';
import CustomSidebar from './components/CustomSidebar';

function App() {
  return (
    <div
      className={`flex flex-row h-screen bg-white dark:bg-zinc-800
        transition-colors duration-300`}
    >
      <div className="flex h-screen lg:w-1/6 sm:w-1/4 shadow-xl">
        <CustomSidebar />
      </div>
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-10 text-white">
        <CustomEditor />
      </main>
    </div>
  );
}

export default App;
