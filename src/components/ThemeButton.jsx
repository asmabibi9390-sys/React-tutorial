import { useTheme } from "./ThemeContext";

function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {darkMode ? " Light Mode" : " Dark Mode"}
    </button>
  );
}

export default ThemeButton;