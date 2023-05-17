import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("parent rendering");
  return (
    <div className="parent">
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <Child header={`i am child ${count}`} />
    </div>
  );
}

export default App;
