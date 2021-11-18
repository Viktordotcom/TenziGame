import React from "react";
import "./components/styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {
  const [dices, setDices] = React.useState(data);

  const [isGameOver, setIsGameOver] = React.useState(false);

  React.useEffect(() => {
    onGameOver();
  }, [dices]);

  function freezeDice(event, diceId) {
    event.stopPropagation();
    return setDices((oldDices) => {
      return oldDices.map((selectedDice) => {
        return selectedDice.id === diceId
          ? { ...selectedDice, hold: !selectedDice.hold }
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
    dices.every((dice) => dice.value === dices[0].value) && setIsGameOver(true);
  }

  function newGame() {
    setDices((dices) => {
      return dices.map((dice) => ({
        ...dice,
        hold: false,
        value: Math.floor(Math.random() * 10),
      }));
    });
    setIsGameOver(false);
  }

  return (
    <div className="App">
      <Header />
      <Main
        dices={dices}
        rollDice={rollDice}
        freezeDice={freezeDice}
        onGameOver={onGameOver}
        isGameOver={isGameOver}
        newGame={newGame}
      />
    </div>
  );
}

export default App;
