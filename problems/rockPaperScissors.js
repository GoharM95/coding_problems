function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "Draw";
  }

  const combos = { rock: "scissors", paper: "rock", scissors: "paper" };

  if (player2 === combos[player1]) {
    return "Player one won!";
  } else {
    return "Player two won!";
  }
}

console.log(rockPaperScissors("rock", "paper"));
