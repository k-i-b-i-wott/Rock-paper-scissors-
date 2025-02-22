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
                    result="You Win";
                }
                else{
                    result="You Lose";
                }
                break;
            case "scissors":
                if(computerChoice === "paper"){
                    result="You Win";
                }
                else{
                    result="You Lose";
                }
                break;
            case "paper":
                if(computerChoice === "rock"){
                    result="You Win";
                } else{
                    result="You Lose";
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

       switch(result){
        case "You Win":            
            playerScore.textContent = playerScoreCount;
            playerDisplay.classList.add("Player wins");
            break;
        case "You Lose":
                       computerScore.textContent = computerScoreCount;
            computerDisplay.classList.add("Computer wins");
            break;      
       }

       if(result === "You Win"){
        playerScoreCount++;
        playerScore.innerHTML = playerScoreCount;
       }
       else if(result === "You Lose"){
        computerScoreCount++;
        computerScore.innerHTML = computerScoreCount;
       }

    }








