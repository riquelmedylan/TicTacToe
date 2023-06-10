import { useEffect, useState } from "react";
import "./App.css";
import Game from "./Game";

function App() {
  const [player, setPlayer] = useState("");
  return (
    <>
      {player ? (
        <Game player={player} setPlayer={setPlayer} />
      ) : (
        <div className="choose__sign">
          <div onClick={() => setPlayer("x")}>X</div>
          <div onClick={() => setPlayer("o")}>O</div>
        </div>
      )}
    </>
  );
}

export default App;
