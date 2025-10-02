import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setDark] = useState<boolean>(true);

  useEffect(() => {
    let savedMode = localStorage.getItem('displayMode');
    if (!savedMode) {
      savedMode = 'dark';
      setDark(true);
      localStorage.setItem('displayMode', savedMode);
    }
    setDark(savedMode === 'dark' ? true : false);
  }, []);

  const darkModeHandler = () => {
    setDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button className="custom-bttn" onClick={() => darkModeHandler()}>
      {isDark && <Sun />}
      {!isDark && <Moon />}
    </button>
  );
}
