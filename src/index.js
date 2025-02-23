const choices=["rock","paper","scissors"];
const resultDisplay=document.getElementById("resultDisplay");
const computerDisplay=document.getElementById("computerIcon");
const playerDisplay=document.getElementById("playerIcon");
const playerScore=document.getElementById("playerScore");
const computerScore=document.getElementById("computerScore");

let playerScoreCount=0;
let computerScoreCount=0;





function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerChoice === computerChoice){
        result="It is a draw";
    }
    else{
        switch (playerChoice){
            case "rock":
                if(computerChoice === "scissors"){
                    result="Player Wins";
                    playerScoreCount++;
                    playerScore.textContent= playerScoreCount;
                }
                else{
                    result="Computer Wins";
                    computerScoreCount++;
                    computerScore.textContent= computerScoreCount;
                }
                break;
            case "scissors":
                if(computerChoice === "paper"){
                    result="Player Wins";
                    playerScoreCount++;
                    playerScore.textContent= playerScoreCount;
                }
                else{
                    result="Computer Wins";
                    computerScoreCount++;
                    computerScore.textContent= computerScoreCount;
                }
                break;
            case "paper":
                if(computerChoice === "rock"){
                    result="Player Wins";
                    playerScoreCount++;
                    playerScore.textContent= playerScoreCount;
                } else{
                    result="Computer Wins";
                    computerScoreCount++;
                    computerScore.textContent= computerScoreCount;
                }
                break;
        }  
    }

    const emojiMap = {
        rock: "&#9994;",
        paper: "&#9995;",
        scissors: "&#9996;"
    };


    playerDisplay.innerHTML=emojiMap[playerChoice];
    computerDisplay.innerHTML=emojiMap[computerChoice];
    resultDisplay.textContent=result;
    }

window.playGame=playGame;






