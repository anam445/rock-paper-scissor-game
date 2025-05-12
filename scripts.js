function getComputerChoice(){
    const randomNum =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (randomNum === 1){
        return "Rock";
    }else if (randomNum === 2){
        return "Paper";
    }else if (randomNum === 3){
        return "Scissors";
    }
}

let compChoice = getComputerChoice();

function getHumanChoice(){
    let choice = prompt("Enter your choice: Rock, Paper, or Scissors");

    const caseSensChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

    if (caseSensChoice === "Rock" || caseSensChoice === "Paper" || caseSensChoice === "Scissors") {
        return caseSensChoice;
    } else {
        console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice == compChoice){
         console.log("its a tie");
    }else if (humanChoice === "Rock" && computerChoice == "Scissors"){
        humanScore++;
        console.log("You won this round");
    }else if (humanChoice == "Scissors" && computerChoice == "Rock"){
        computerScore++;
        console.log("Computer won this round");
    }else if (humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore++;
        console.log("You won this round");
    }else if (humanChoice == "Rock" && computerChoice == "Paper"){
        computerScore++;
        console.log("Computer won this round");
    }else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore++;
        console.log("You won this round");
    }else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        computerScore++;
        console.log("Computer won this round");
    }

}

function playGame(){
    console.log("Welcome to ROCK, PAPER, SCISSORS");

    const numberOfRounds = 5;

    for (let i = 1; i <= numberOfRounds; i++){
        console.log("Round " + i);

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    
    console.log("\n--- Game Over ---");
    if (humanScore > computerScore){
        console.log("You have won by " + humanScore + " to " + computerScore);
    }else {
        console.log("You have lost by " + humanScore + " to " + computerScore);
    }
}
  
//playGame();