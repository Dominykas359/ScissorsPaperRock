const computerChoises = ["scissors", "paper", "rock"];
const yourChoise = document.getElementById("yourChoise");
const computerChoise = document.getElementById("computerChoise");
const message = document.getElementById("message");
const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");

//player score
let score1 = 0;

//compter score;
let score2 = 0;

function choose(player){

    message.classList.remove("youWin", "computerWin");

    let computerchoise = computerChoises[Math.floor(Math.random() * 3)];
    
    if(player == computerchoise){
        message.textContent = "TIE!";
    }
    else{
        if(player === "scissors" && computerchoise === "paper"){
            message.textContent = "YOU WIN!";
            message.classList.add("youWin");
            score1++;
        }
        else if(player === "paper" && computerchoise === "rock"){
            message.textContent = "YOU WIN!";
            message.classList.add("youWin");
            score1++;
        }
        else if(player === "rock" && computerchoise === "scissors"){
            message.textContent = "YOU WIN!";
            message.classList.add("youWin");
            score1++;
        }
        else{
            message.textContent = "YOU LOSE!";
            message.classList.add("computerWin");
            score2++;
        }
    }

    yourChoise.textContent = `You: ${player}`;
    computerChoise.textContent = `Computer: ${computerchoise}`;

    yourScore.textContent = `Your score: ${score1}`;
    computerScore.textContent = `Computer score: ${score2}`;
}