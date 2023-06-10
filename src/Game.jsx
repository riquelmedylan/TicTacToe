import { useEffect, useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useWin } from "./hooks/useWin";
import { Win } from "./Win";

let initialValue = ["", "", "", "", "", "", "", "", ""];

function Game({ player, setPlayer }) {
  const [win, setWin] = useState("");
  const [boardPlayer, setBoardPlayer] = useState(initialValue);
  const [boardOpponent, setBoardOpponent] = useState(initialValue);
  const [yourTurn, setYourTurn] = useState(true);
  const [turns, setTurns] = useState(0);
  const container = useRef(false);

  const setSignOpponent = () => {
    if (player === "x") {
      return "o";
    } else {
      return "x";
    }
  };

  useWin({ player: player, board: boardPlayer, setWin: setWin });
  useWin({ player: setSignOpponent(), board: boardOpponent, setWin: setWin });

  const checkCell = (index, e) => {
    if (!e.target.textContent && yourTurn) {
      e.target.textContent = player;
      setYourTurn(false);
      changeBoard(boardPlayer, index, setBoardPlayer);
    }
  };

  const changeBoard = (board, i, fn) => {
    let newArr = [...board];
    newArr[i] = 1;
    fn(newArr);
  };

  const addCellOponent = (interval) => {
    let number = Math.floor(Math.random() * 9);
    if (!container.current?.children[number].textContent) {
      if (container.current) {
        container.current.children[number].textContent = setSignOpponent();
      }
      changeBoard(boardOpponent, number, setBoardOpponent);
      setYourTurn(true);
      clearInterval(interval);
    }
  };

  useEffect(() => {
    if (!yourTurn && turns != 9) {
      const turnEnemy = setInterval(() => {
        addCellOponent(turnEnemy);
      }, 100);
    }
    setTurns(turns + 1);
  }, [yourTurn, boardPlayer, boardOpponent]);


  return (
    <>
      {win ? (
        <Win win={win} setPlayer={setPlayer} setWin={setWin} />
      ) : (
        <div ref={container} className="container">
          {Array(9)
            .fill(1)
            .map((el, i) => (
              <div
                key={i}
                className="cells"
                onClick={(e) => checkCell(i, e)}
              ></div>
            ))}
        </div>
      )}
    </>
  );
}

export default Game;
