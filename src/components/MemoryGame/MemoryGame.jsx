import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

const MemoryGame = () => {
  const tileData = [
    { id: 1, value: "🍎", matched: false },
    { id: 2, value: "🍌", matched: false },
    { id: 3, value: "🍇", matched: false },
    { id: 4, value: "🍒", matched: false },
    { id: 5, value: "🍓", matched: false },
    { id: 6, value: "🍍", matched: false },
    { id: 7, value: "🍎", matched: false },
    { id: 8, value: "🍌", matched: false },
    { id: 9, value: "🍇", matched: false },
    { id: 10, value: "🍒", matched: false },
    { id: 11, value: "🍓", matched: false },
    { id: 12, value: "🍍", matched: false },
  ];

  const [tiles, setTiles] = useState([]);
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Shuffle tiles on game start
    setTiles(shuffleArray([...tileData]));
  }, []);

  useEffect(() => {
    // Check for a match when two tiles are flipped
    if (flippedTiles.length === 2) {
      const [first, second] = flippedTiles;
      if (tiles[first].value === tiles[second].value) {
        setTiles((prevTiles) =>
          prevTiles.map((tile, index) =>
            index === first || index === second
              ? { ...tile, matched: true }
              : tile
          )
        );
      }
      setTimeout(() => setFlippedTiles([]), 1000);
      setMoves((prev) => prev + 1);
    }
  }, [flippedTiles, tiles]);

  useEffect(() => {
    // Check if all tiles are matched
    if (tiles.every((tile) => tile.matched)) {
      setGameOver(true);
    }
  }, [tiles]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleTileClick = (index) => {
    if (flippedTiles.length < 2 && !flippedTiles.includes(index) && !tiles[index].matched) {
      setFlippedTiles((prev) => [...prev, index]);
    }
  };

  const resetGame = () => {
    setTiles(shuffleArray([...tileData]));
    setFlippedTiles([]);
    setMoves(0);
    setGameOver(false);
  };

  return (
    <div className="memory-game">
      <h2>Memory Game</h2>
      <p>Moves: {moves}</p>
      <div className="game-board">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${flippedTiles.includes(index) || tile.matched ? "flipped" : ""}`}
            onClick={() => handleTileClick(index)}
          >
            <div className="front">{tile.value}</div>
            <div className="back"></div>
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="game-over">
          <p>Congratulations! You matched all tiles in {moves} moves!</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
