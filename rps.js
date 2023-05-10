function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    let randRps = Math.floor(Math.random() * rps.length);
    return rps[randRps];    
};

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            game(button.id);
        });

    });

const results = document.querySelector('#results');

let userScore = 0;
let compScore = 0;


function playRound(playerSelection) {
    let compChoice = getComputerChoice();

    if (playerSelection === 'rock') {
        if (compChoice === 'Paper') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Paper, you lose!'
            results.appendChild(resultUpdate)
            return result = 'compWin';
        }
        else if (compChoice === 'Scissors') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Scissors, you win!'
            results.appendChild(resultUpdate)
            return 'userWin';
        }
        else if (compChoice === 'Rock') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Rock, you draw'
            results.appendChild(resultUpdate)
            return 'draw';
        }
    }
    
    else if (playerSelection === 'paper') {
        if (compChoice === 'Rock') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Rock, you win!'
            results.appendChild(resultUpdate)
            return 'userWin';
        }
        else if (compChoice === 'Scissors') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Scissors, you lose!'
            results.appendChild(resultUpdate)
            return 'compWin';
        }
        else if (compChoice === 'Paper') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Paper, you draw'
            results.appendChild(resultUpdate)
            return 'draw';
        }
    }
    
    else if (playerSelection === 'scissors') {
        if (compChoice === 'Rock') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Rock, you lose!'
            results.appendChild(resultUpdate)
            return 'compWin';
        }
        else if (compChoice === 'Scissors') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Scissors, you draw!'
            results.appendChild(resultUpdate)
            return 'draw';
        }
        else if (compChoice === 'Paper') {
            let resultUpdate = document.createElement('div')
            resultUpdate.textContent = 'Computer chose Paper, you win!'
            results.appendChild(resultUpdate)
            return 'userWin';
        }
    }
}

function game(playerSelection) {

    const playerScoreDisplay = document.querySelector('#playerscore');
    const compScoreDisplay = document.querySelector('#compscore');

    function updateScore(){
        playerScoreDisplay.textContent = `Player Score: ${userScore}`;
        compScoreDisplay.textContent = `Computer Score: ${compScore}`;
    }

    let round = playRound(playerSelection);
        if (round === "userWin") {
            userScore++;
            updateScore();
        } else if (round === "compWin") {
            compScore++;
            updateScore();
        } else if (round === "draw") {
            updateScore();
        }
    

    if (userScore === 5) {
        const playerWin = document.createElement('h1');
        playerWin.textContent = 'Congrats! You Win!';
        results.appendChild(playerWin);
    }
    else if (compScore === 5) {
        const playerWin = document.createElement('h1');
        playerWin.textContent = 'Computer wins';
        results.appendChild(playerWin);
    }

}

game ();
  