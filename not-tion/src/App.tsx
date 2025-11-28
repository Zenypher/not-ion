import EditorView from './components/EditorView';
import CustomSidebar from './components/CustomSidebar';
import CustomTitlebar from './components/CustomTitlebar';
import CustomToolbar from './components/EditorToolbar';

import { useState, useEffect } from 'react';

function App() {
  const [isTauri, setTauri] = useState<boolean>(false);

  useEffect(() => {
    if ('__TAURI__' in window) {
      setTauri(true);
    }
  }, [isTauri]);

  return (
    <div
      className={`grid grid-cols-[auto_1fr] h-screen transition-all duration-200
        bg-[url('assets/blob-bg.svg')] dark:bg-[url('assets/blob-bg-dark.svg')]
        bg-cover `}
    >
      <CustomSidebar />
      <main
        className="grid grid-rows-[auto_1fr] gap-6 overflow-y-auto
          overflow-x-hidden p-12 no-scrollbar"
      >
        {isTauri && <CustomTitlebar />}
        <CustomToolbar />
        <EditorView />
      </main>
    </div>
  );
}

export default App;
