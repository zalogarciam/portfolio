import { useState } from "react";

const ThemeSelector = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "");

  const handleChangeSelectTheme = (e) => {
    document.documentElement.className = e.target.value;
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
    console.log(theme);
  };


  return (
    <select
      className="select select--theme icon--border paragraph-text"
      onChange={handleChangeSelectTheme}
      value={theme}
    >
      <option value="code">💻 Code</option>
      <option value="dark">🌚 Dark</option>
      <option value="light">🌞 Light</option>
    </select>
  );
};

export default ThemeSelector;
