
const btnRoll = document.getElementById('btn-roll');
const btnHold = document.getElementById('btn-hold');
const btnNew = document.getElementById('btn-new');
const currentTurn = document.getElementById('current-turn');
// const winPoints = document.getElementById('final-score').value;

const dice1 = document.getElementById('dice-1');
const dice2 = document.getElementById('dice-2');

const player1Secured = document.getElementById('score-0');
const player2Secured = document.getElementById('score-1');

const player1ActiveScore = document.getElementById('current-0');
const player2ActiveScore = document.getElementById('current-1');

const gameArea = document.querySelector('.game-area');

const video = document.querySelector('.video')
const videoDiv = document.querySelector('.video-holder');

let isRunning = false;
let winPoints = 0;

btnNew.addEventListener('click',() => {
    
   
    newGame();
})

function newGame () {
    

player1 = 0;
player2 = 0;
player1Active = 0;
player2Active = 0;
pointsCollector = [];
currentPlayer = true;
player1Secured.textContent = 0;
player2Secured.textContent = 0;
player1ActiveScore.textContent = player1Active;
player2ActiveScore.textContent = player2Active;
currentTurn.textContent = `Player 1 starts`
winPoints = window.prompt('Enter amount of points to win: ');


}


let player1 = 0;
let player2 = 0;
let player1Active = 0;
let player2Active = 0;
let pointsCollector = [];

let currentPlayer = true;

btnRoll.addEventListener('click', () => {

    
    if (currentPlayer) {
        currentTurn.textContent = `Player 1s turn`
    rollDice(player1Active);
    } else {
        currentTurn.textContent = `Player 2s turn`
        rollDice(player2Active);
    }
    
})

btnHold.addEventListener('click', () => {
    const activePoints = pointsCollector.reduce((accuomolator, points) => {
        return accuomolator += points;
    })
    pointsCollector = [];
    if (currentPlayer) {
        holdPoints(activePoints);
        } else {
            holdPoints(activePoints);
        }
})

function rollDice (player) {
    
    const diceRoll1 = Math.floor(Math.random()*6) + 1;
    const diceRoll2 = Math.floor(Math.random()*6) + 1;
    player += (diceRoll1 + diceRoll2);
   
    dice1.innerHTML = `<img src ="img/dice-${diceRoll1}.png">`
    dice2.innerHTML = `<img src ="img/dice-${diceRoll2}.png">`

    

    pointsCollector.push(player);
    if (diceRoll1 == 1 || diceRoll2 == 1) {
        player = 0;
        pointsCollector = [0];
        holdPoints(0);
    }
    const activePoints = pointsCollector.reduce((accuomolator, points) => {
        return accuomolator += points;
    });
   

    if (currentPlayer) {
        player1ActiveScore.textContent = activePoints;
    } else {
        player2ActiveScore.textContent = activePoints;
    };

}

function holdPoints(points) {
    
    

    if(currentPlayer) {
     
        player1 += points;
        player1Secured.textContent = player1;

        player1Active = 0;
        player1ActiveScore.textContent = player1Active;
        if (player1 >= winPoints) {
        //    video.classList.remove('hide');
           gameArea.style.display = 'none';
           const p1 = document.createElement('h2');
           document.body.appendChild(p1);
           setTimeout(() => {
            gameArea.style.display = 'block';
            p1.textContent = "";
            p1.remove();
        }, 5000);
           return p1.textContent = `PLAYER 1 WON 🥳`;
        //    return currentTurn.textContent = `PLAYER 1 WON`;
        }
        currentPlayer = false;
        
        currentTurn.textContent = `Player 2s turn`

        
    } else {    
        player2 += points;
        player2Secured.textContent = player2;

        player2Active = 0;
        player2ActiveScore.textContent = player2Active;
        if (player2 >= winPoints) {
           
            gameArea.style.display = 'none';
            const p1 = document.createElement('h2');
            document.body.appendChild(p1);
            setTimeout(() => {
                gameArea.style.display = 'block';
                p1.textContent = "";
                p1.remove();
            }, 5000);
            return p1.textContent = `PLAYER 2 WON 🥳`;
            // return currentTurn.textContent = `PLAYER 2 WON`;
            

        }
        currentPlayer = true;
        currentTurn.textContent = `Player 1s turn`

    }
   
    
}




