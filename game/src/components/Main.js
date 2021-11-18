import React from "react";
import "./styles/Main.css";

export default function Main(props) {
  const diceComponent = props.dices.map((dice) => {
    return (
      <div
        key={dice.id}
        className={dice.hold ? "dice hold" : "dice"}
        id={dice.id}
        onClick={(event) => props.freezeDice(event, dice.id)}
      >
        <p>{dice.value}</p>
      </div>
    );
  });

  return (
    <main>
      <div className="dice-container">{diceComponent}</div>
      {props.isGameOver ? (
        <button onClick={props.newGame}>New Game</button>
      ) : (
        <button onClick={props.rollDice}>Roll</button>
      )}
    </main>
  );
}
