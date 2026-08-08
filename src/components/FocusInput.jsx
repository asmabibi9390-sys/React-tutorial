import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div className="focus-container">
      <h1>useRef Project</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;