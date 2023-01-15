import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
      <Table />
    </div>
  );
}

export default App;
