import { createContext, useContext, useState } from "react";
import "./App.css";

const ThemeContext = createContext();

function ThemeButton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

function Content() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Context API Project</h1>

      <p>
        {darkMode
          ? "Dark Mode is ON"
          : "Light Mode is ON"}
      </p>

      <ThemeButton />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;