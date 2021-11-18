import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {
  const [dices, setDices] = React.useState(data);

  const [currentDice, setCurrentDice] = React.useState(
    (dices[0] && dices[0].id) || ""
  );

  const [isGameOver, setIsGameOver] = React.useState(false);

  function findCurrentDice() {
    return (
      dices.find((dice) => {
        return dice.id === currentDice;
      }) || dices[0]
    );
  }

  function freezeDice() {
    setDices((oldDices) => {
      return oldDices.map((selectedDice) => {
        return selectedDice.id === currentDice
          ? { ...selectedDice, hold: true }
          : selectedDice;
      });
    });
  }

  function rollDice() {
    setDices((dices) => {
      return dices.map((dice) => {
        return dice.hold === false
          ? { ...dice, value: Math.floor(Math.random() * 10) }
          : dice;
      });
    });
  }

  function onGameOver() {
    return setIsGameOver(true);
    // some visual updates too
  }

  function newGame() {
    // revert data back and visual updates to start point
    return setIsGameOver(false);
  }

  return (
    <div className="App">
      <Header />
      <Main setCurrentDice={setCurrentDice} />
    </div>
  );
}

export default App;
