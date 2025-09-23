import AppContainer from "./AppContainer";
import CustomTitlebar from "./components/CustomTitlebar";

function App() {
  return (
    <AppContainer>
      <CustomTitlebar />
      <div className="flex flex-row">
      <div className="bg-gray-700 flex flex-col self-start w-1/4 p-4 h-dvh">
        <div className="[&>p]:p-2 [&>p]:text-white [&>p]:hover:bg-gray-800 [&>p]:hover:cursor-pointer [&>p]:text-center">
          <p>Text 1</p>
          <p>Text 2</p>
          <p>Text 3</p>
          <p>Text 4</p>
          <p>Text 5</p>
          <p>Text 6</p>
        </div>
      </div>
      <div className="p-4">
      </div>
      </div>
    </AppContainer>
  );
}

export default App;
