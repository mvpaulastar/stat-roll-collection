import { useState } from "react";
import "./App.css";
import SpinningDice from "./components/SpinningDice.js";

function App() {
  const [statBlock, setStatBlock] = useState([]);

  const handleClick = () => {
    let newStatBlock = [];
    for (let i = 0; i < 6; i++) {
      newStatBlock.push(rollStat());
    }

    setStatBlock(newStatBlock);
  };
  return (
    <div className="App">
      <SpinningDice statBlock={statBlock} />
      <div className="container">
        {statBlock.map(statDiv)}
        <button onClick={handleClick}>Roll!</button>
      </div>
      <SpinningDice statBlock={statBlock} />
    </div>
  );
}

/*Roll 4d6 drop the lowest*/
function rollStat() {
  let stat = [];

  for (let i = 0; i < 4; i++) {
    stat.push(Math.floor(Math.random() * 6) + 1);
  }

  return stat
    .sort()
    .slice(1)
    .reduce((a, b) => a + b);
}

function statDiv(stat) {
  return (
    <div className="statDiv">
      <h1>{stat}</h1>
    </div>
  );
}

export default App;
