const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const resultText = document.getElementById('resultText');

const allGameIcons = document.querySelectorAll('.far');

let computerChoice = '';
let computerChoiceNumber = 0;
let playerChoiceNumber = 0;

const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard']},
    paper: { name: 'Paper', defeats: ['rock', 'spock']},
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard']},
    lizard: { name: 'Lizard', defeats: ['paper', 'spock']},
    spock: { name: 'spock', defeats: ['scissors', 'rock']},
};

function updateResults(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
      resultText.textContent = "E b draw-draw.";
  } else {
      const choice = choices[playerChoice];
      console.log(choice.defeats.indexOf(computerChoice));
      if (choice.defeats.indexOf(computerChoice) > -1) {
          resultText.textContent = 'correct guy, u win!';
          playerChoiceNumber++;
          playerScoreEl.textContent = playerChoiceNumber;
      } else {
          resultText.textContent = 'You dey Lost Oh!';
          computerChoiceNumber++;
          computerScoreEl.textContent = computerChoiceNumber;
      }
  }
};

function computerSelected() {
 const computerNumber = Math.random();
 if(computerNumber < 0.2) {
     computerChoice = 'rock';
 } else if (computerNumber <= 0.4) {
     computerChoice = 'paper';
 } else if (computerNumber <= 0.6) {
     computerChoice = 'scissors';
 } else if (computerNumber <= 0.8) {
     computerChoice = 'lizard';
 } else {
     computerChoice = 'spock';
 }
}

function displayComputerChoice() {
    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = '--Rock';
            break;

        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = '--Paper';
            break;

        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent = '--Scissors';
            break;

        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = '--Lizard';
            break;

        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = '--Spock';
            break;
        default:
            break;
    }
}

function checkResults(playerChoice) {
    resetSelected();
    computerSelected();
    displayComputerChoice();
    updateResults(playerChoice);
}

function resetSelected() {
    allGameIcons.forEach((icons) => {
        icons.classList.remove('selected');
    });
}

function resetAll() {
    resultText.textContent = "Welcome, no do ojoro Oh!";
    playerChoiceNumber = 0;
    computerChoiceNumber = 0;
    playerScoreEl.textContent = playerChoiceNumber;
    computerScoreEl.textContent = computerChoiceNumber;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';  

};

function select(playerChoice) {
    checkResults(playerChoice)
    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = '--Rock';
            break;

        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = '--Paper';
            break;

        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent = '--Scissors';
            break;

        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = '--Lizard';
            break;

        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = '--Spock';
            break;
        default:
            break;
    }
}

resetAll()