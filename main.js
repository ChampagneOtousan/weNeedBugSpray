let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
  return array[(Math.ceil(Math.random()*3-1))];
}

function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }

  let computerChoice = randomFrom(computerChoices);
  console.log("Computer's choice", computerChoice);
  console.log("Player's choice", input);

  if(computerChoice === "rock" && input === "scissors"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice === "scissors" && input === "paper"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice === "paper" && input === "rock"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice === "paper" && input === "scissors"){
    alert("Player wins!");
    return false;
  } else if (computerChoice === "scissors" && input === "rock"){
    alert("Player wins!");
    return false;
  } else if (computerChoice === "rock" && input === "paper"){
    alert("Player wins!");
    return false;
  } else if (computerChoice == input){
    alert("Draw!");
    return false;
  }
  //TODO REVISIT
  alert("Invalid");``
  return false;
}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
    playerInput = playerInput.toLowerCase();
    gameOver = checkInput(playerInput, computerChoices);
  }
}

start(gameOver, computerChoices)
