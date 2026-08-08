import useToggle from "../hooks/useToggle";

function ToggleApp() {
  const [show, toggle] = useToggle(false);

  return (
    <div className="toggle-container">
      <h1>Custom Hook Project</h1>

      <button onClick={toggle}>
        {show ? "Hide" : "Show"}
      </button>

      {show && (
        <p>
          This content is controlled by my custom hook.
        </p>
      )}
    </div>
  );
}

export default ToggleApp;