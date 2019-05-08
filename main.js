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


// NYCDA SpyEncoder

function encode(word) {
  //somewhere to store the converted characters
  let result = [];
  //next we loop over each character in the string.
for(position in word){
  //and save the charcode to the array
  result.push(word.charCodeAt(position));
}
// and return that list of codes, separated by colons
return result.join(':');
}

function decode(hash) {
  //split the code by semicolons!
let arr = hash.split(':');
// again somewhere to put our codes
let result = [];
//loop over the codes
for(code of arr){
  //changhe the code back to the string character equivalent
  result.push(String.fromCharCode(code));
  }
  return result.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);
