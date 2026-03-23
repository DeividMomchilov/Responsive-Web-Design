const choices = ["rock","paper","scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Its a tie!";
    }
    else{
        switch(playerChoice){
            case"rock":
                if(computerChoice === "scissors")
                    result = "You win!";
                else 
                    result = "You lose!";
                 break;

            case"paper":
                if(computerChoice === "scissors")
                    result = "You lose!";
                else 
                    result = "You win!";
                break;

            case"scissors":
                if(computerChoice === "rock")
                    result = "You lose!";
                else 
                    result = "You win!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case"Its a tie!":
            resultDisplay.style.color = "black";
            break;
        case"You win!":
            resultDisplay.style.color = "green";
            break;
        case"You lose!":
            resultDisplay.style.color = "red";
            break;
    }
}