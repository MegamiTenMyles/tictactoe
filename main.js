const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText')
const spaces = [];
const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer;

const drawBoard = () => {
    boxes.forEach((box, index) =>{
        let styleString = ''
        if (index < 3) {
            styleString += 'border-bottom: 3px solid black;';
        }
        if (index % 3 == 0) {
            styleString += 'border-right: 3px solid black;';
        }
        if (index % 3 == 2){
            styleString += 'border-left: 3px solid black;';
        }
        if (index > 5) {
            styleString += 'border-top: 3px solid black;';
        }
        box.style = styleString;
        box.addEventListener('click' , boxClicked)
    });
};

function boxClicked(e) {
    const id = e.target.id;
    if (!spaces[id]) {
      spaces[id] = currentPlayer;
      e.target.innerText = currentPlayer;
      if (hasPlayerWon(currentPlayer)) {
        playText.innerHTML = `${currentPlayer} wins!!`;
        return;
      }
      currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
  }

const hasPlayerWon = (player) => {
    if (spaces[0] === player) {
      if (spaces[1] === player && spaces[2] === player) {
        console.log(`${player} wins up top`);
        return true;
      }
      if (spaces[3] === player && spaces[6] === player) {
        console.log(`${player} wins on the left`);
        return true;
      }
      if (spaces[4] === player && spaces[8] === player) {
        console.log(`${player} wins on the diagonal`);
        return true;
      }
    }

    if (spaces[8] === player) {
      if (spaces[2] === player && spaces[5] === player) {
        console.log(`${player} wins on the right`);
        return true;
      }
      if (spaces[7] === player && spaces[6] === player) {
        console.log(`${player} wins on the bottom`);
        return true;
      }
    }
 
    if (spaces[4] === player) {
      if (spaces[3] === player && spaces[5] === player) {
        console.log(`${player} wins on the middle horizontal`);
        return true;
      }
      if (spaces[1] === player && spaces[7] === player) {
        console.log(`${player} wins on the middle vertical`);
        return true;
      }
    }
  };
  
  

const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
      });
      boxes.forEach((box) => {
          box.innerText = '';
      })
      playText.innerText = `Let's play`;
      currentPlayer = O_TEXT
}
restartBtn.addEventListener('click', restart)
restart()
drawBoard()