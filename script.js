const options = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
    const choice = options(Math.floor(Math.random() * options.length));
    return choice;
}

function winner(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "Tie!"
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
            (playerSelection == "Paper" && computerSelection == "Rock") ||
            (playerSelection == "Scissors" && computerSelection == "Paper")){
                return "Player Wins!"
            }
    else {
        return "Computer Wins."
    }
}

function playRound(playerSelection, computerSelection) {
    const result = winner(playerSelection, computerSelection);
    if(result == "Tie!"){
        return "It's a Tie."
    }
    else if(result == "Player Wins!"){
        return `You win ${playerSelelcetion} beats ${computerSelection}`;
    }
    else {
        return `Computer wins ${computerSelelcetion} beats ${playerSelection}`;
    }
  }

  function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock Paper Scissors")
            if (choice == null){
                continue;
            }
            const choiceInLower = choice.toLocaleLowerCase();
            if(options.includes(choiceInLower)){
                validatedInput == true;
                return choiceInLower;
            }
    }
  }

  function game(playRound) {
    let scorePlayer = 0;
    let scoreComp = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(winner(playerSelection, computerSelection) == "Player Wins!"){
            scorePlayer++;
        }
        else if(winner(playerSelection, computerSelection) == "Computer Wins."){
            scoreComp++;
        }
    }
    console.log("Game Over.");
    if (scorePlayer > scoreComp){
        console.log("Player Wins")
    }
    else if(scoreComp > scorePlayer){
        console.log("Computer Wins")
    }
    else{
        console.log("We have a tie.")
    }
  }
   
  game();