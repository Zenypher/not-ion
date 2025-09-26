import CustomSidebar from './components/CustomSidebar';

function App() {
  return (
    <div className="flex flex-row h-screen bg-stone-700">
      <div
        className="flex h-screen lg:w-1/6 sm:w-1/4 border-r-2 border-white/25
          shadow-xl"
      >
        <CustomSidebar />
      </div>
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-10 text-white">
        <div>What is in here</div>
      </main>
    </div>
  );
}

export default App;
