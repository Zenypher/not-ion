import reactLogo from "./assets/react.svg";
import CustomTitlebar from "./components/CustomTitlebar";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="flex flex-col min-w-screen min-h-screen">
        <CustomTitlebar />
        <div className="flex flex-col m-auto gap-y-6">
          <div className="flex justify-center gap-x-10 [&>a]:hover:scale-110 [&>a]:transition-all [&>a]:duration-300 [&>a]:ease-in-out">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="font-bold text-2xl">Vite + React</h1>
          <div className="card">
            <p>
              Edit <code className="text-blue-300">src/App.tsx</code> and save
              to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
