import { useEffect } from "react";
import { wins } from "../assets/variable";

let count = 0;
export function useWin({ player, board, setWin }) {
  useEffect(() => {
    for (let win in wins) {
        wins[win].forEach((boardWin, i) => {
          if (boardWin === 1 && board[i] === 1) {
            count = count + 1;
            if (count === 3) {
              setWin(player);
            }
          }
        });
        count = 0;
    }
  }, [board]);
}
