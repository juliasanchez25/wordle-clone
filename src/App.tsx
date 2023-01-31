import { useState } from "react";
import "./styles/index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <h1>Hello world</h1>
      </nav>
    </div>
  );
}

export default App;
