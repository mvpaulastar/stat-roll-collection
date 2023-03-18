import { useState } from "react";
import "./App.css";
import RollHistory from "./components/RollHistory.js";
import SpinningDice from "./components/SpinningDice.js";

function App() {
  const [statBlock, setStatBlock] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const handleClick = () => {
    let newStatBlock = [];
    for (let i = 0; i < 6; i++) {
      newStatBlock.push(rollStat());
    }

    setStatBlock(newStatBlock);

    const stats = {
      newStatBlock,
    };

    setIsPending(true);

    fetch("http://localhost:5000/statBlocks", {
      //Post to db.json
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stats),
    }).then(() => {
      console.log(stats);
      setIsPending(false);
    });
  };

  return (
    <div className="App">
      <SpinningDice statBlock={statBlock} />
      <div className="container">
        <div className="statblock">{statBlock.map(statDiv)}</div>
        <button onClick={handleClick}>ROLL</button>
      </div>
      {!isPending && <RollHistory />}
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
