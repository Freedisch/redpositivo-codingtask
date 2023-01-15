import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
