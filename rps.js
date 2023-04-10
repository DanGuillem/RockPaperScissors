function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    let randRps = Math.floor(Math.random() * rps.length);
    return rps[randRps];    
};


function playRound() {
    let compChoice = getComputerChoice();

    let playerSelection = prompt("Please enter your guess: ");

    if (playerSelection.toLowerCase() === 'rock') {
        if (compChoice === 'Paper') {
            console.log('Computer chose Paper, you lose!')
            return result = 'compWin';
        }
        else if (compChoice === 'Scissors') {
            console.log('Computer chose Scissors, you win!')
            return 'userWin';
        }
        else if (compChoice === 'Rock') {
            console.log('Computer chose Rock, you draw')
            return 'draw';
        }
    }
    
    else if (playerSelection.toLowerCase() === 'paper') {
        if (compChoice === 'Rock') {
            console.log('Computer chose Rock, you win!')
            return 'userWin';
        }
        else if (compChoice === 'Scissors') {
            console.log('Computer chose Scissors, you lose!')
            return 'compWin';
        }
        else if (compChoice === 'Paper') {
            console.log('Computer chose Paper, you draw')
            return 'draw';
        }
    }
    
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (compChoice === 'Rock') {
            console.log('Computer chose Rock, you lose!')
            return 'compWin';
        }
        else if (compChoice === 'Scissors') {
            console.log('Computer chose Scissors, you draw!')
            return 'draw';
        }
        else if (compChoice === 'Paper') {
            console.log('Computer chose Paper, you win!')
            return 'userWin';
        }
    }
}

function game() {
    let userScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound();
        if (round === "userWin") {
            userScore++;
            console.log(`Current Score: You: ${userScore}, Computer: ${compScore}`);
        } else if (round === "compWin") {
            compScore++;
            console.log(`Current Score: You: ${userScore}, Computer: ${compScore}`);
        } else if (round === "draw") {
            console.log(`Current Score: You: ${userScore}, Computer: ${compScore}`);
        }
    }

    if (userScore > compScore) {
        console.log('Game Over! Congrats! You Win!');
    } else if (userScore < compScore) {
        console.log('Game Over! You Lose!'); 
    } else {
        console.log("Game Over! Boring, It's a draw!");
    }

}

game ();
  