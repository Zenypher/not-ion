import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setDark] = useState<boolean>(false);

  useEffect(() => {
    let savedMode = localStorage.getItem('theme');
    if (!savedMode) {
      savedMode = 'dark';
      setDark(true);
      localStorage.setItem('theme', savedMode);
    }
    setDark(savedMode === 'dark' ? true : false);
  }, []);

  const darkModeHandler = () => {
    setDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button className="custom-bttn" onClick={() => darkModeHandler()}>
      {isDark && <Sun />}
      {!isDark && <Moon />}
    </button>
  );
}
