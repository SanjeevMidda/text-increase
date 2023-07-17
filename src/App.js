import { useState } from "react";
import "./index.css";

function App() {
  const [size, setSize] = useState(12);
  const [status, setStatus] = useState(true);

  let fontSize = {
    fontSize: size,
    fontFamily: status ? "Arial" : "Helvetica",
  };

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <h1 style={fontSize}>hello.</h1>

      <div className="increaseContainer">
        <h3 onClick={() => setSize(size - 25)}>-</h3>
        <h3 onClick={() => setSize(size + 50)}>+</h3>
      </div>
    </div>
  );
}

export default App;
