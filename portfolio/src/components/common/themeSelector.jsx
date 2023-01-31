import { useState } from "react";

const ThemeSelector = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "");

  const handleChangeSelectTheme = (e) => {
    document.documentElement.className = e.target.value;
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  return (
    <select
      className="select select--theme icon--border"
      onChange={handleChangeSelectTheme}
      value={theme}
    >
      <option value="code">💻</option>
      <option value="dark">🌚</option>
      <option value="light">🌞</option>
    </select>
  );
};

export default ThemeSelector;
