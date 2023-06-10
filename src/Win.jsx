import React from "react";
import "./App.css";

export const Win = ({ win, setPlayer, setWin }) => {
  const reset = () => {
      setWin("");
      setPlayer("");
  };
  return (
    <div className="win">
      <div>Ganaste "{win}"</div>
      <p onClick={reset}>Reiniciar</p>
    </div>
  );
};
