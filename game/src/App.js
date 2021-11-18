import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {
  const [dices, setDices] = React.useState(data);

  // const [currentDice, setCurrentDice] = React.useState(
  //   (dices[0] && dices[0].id) || ""
  // );

  const [isGameOver, setIsGameOver] = React.useState(false);

  // function findCurrentDice() {
  //   return (
  //     dices.find((dice) => {
  //       return dice.id === currentDice;
  //     }) || dices[0]
  //   );
  // }
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
    dices.every((dice) => dice.value === dices[0].value)
      ? setIsGameOver(true)
      : console.log("Not every value matches");
    // some visual updates too
  }

  function newGame() {
    // revert data back and visual updates to start point
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
