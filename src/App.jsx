import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <>
      <h1 className="heading">React Props Example</h1>

      <StudentCard
        name="Asma Khan"
        age={20}
        course="React.js"
      />

      <StudentCard
        name="Ali Khan"
        age={22}
        course="JavaScript"
      />

      <StudentCard
        name="Ayesha"
        age={19}
        course="HTML & CSS"
      />
    </>
  );
}

export default App;