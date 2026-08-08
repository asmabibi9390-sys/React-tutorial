import { useState } from "react";

function BackgroundChanger() {
  const [color, setColor] = useState("#f5f5f5");

  function changeColor(newColor) {
    setColor(newColor);
  }

  return (
    <div
      className="background-changer"
      style={{ backgroundColor: color }}
    >
      <h1>Background Changer</h1>

      <p>Choose a color</p>

      <div className="color-buttons">
        <button onClick={() => changeColor("lightblue")}>
          Blue
        </button>

        <button onClick={() => changeColor("lightgreen")}>
          Green
        </button>

        <button onClick={() => changeColor("lightpink")}>
          Pink
        </button>

        <button onClick={() => changeColor("lavender")}>
          Purple
        </button>

        <button onClick={() => changeColor("#f5f5f5")}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default BackgroundChanger;