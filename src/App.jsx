import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
function deriveActivePlayer(gameTurn){
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurn);

  function handleSelectSquare(rowIndew, colIndex) {
    // setActivePlayer(curActivePlayer => (curActivePlayer === "X" ? "O" : "X"));
    
    setGameTurn(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurn = [
        { square: { row: rowIndew, col: colIndex }, player: currentPlayer }, //new item always first one and then ...
        ...prevTurns
      ];
      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
