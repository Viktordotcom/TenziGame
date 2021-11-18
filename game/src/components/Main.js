import React from "react";

export default function Main(props) {
  const diceComponent = props.dices.map((dice) => {
    return (
      <div key={dice.id}>
        <p id={dice.id} onClick={(event) => props.freezeDice(event, dice.id)}>
          {dice.value}
        </p>
      </div>
    );
  });
  return (
    <div>
      {diceComponent}
      {props.isGameOver ? (
        <button onClick={props.newGame}>New Game</button>
      ) : (
        <button onClick={props.rollDice}>Roll</button>
      )}
    </div>
  );
}
