/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner
// board represents state of board
// turn represents tracking whose turn it is
// winner represents a win/tie

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector('.board')
const messageEl = document.querySelector('#message')
console.log(squareEls)

/*----------------------------- Event Listeners -----------------------------*/
squareEls.addEventListener('click', handleClick)


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render() 
}

function render() {
  board.forEach((square, index) => {
    if(square === 1) {
      squareEls[index].textContent = 'x' 
    } if (square === -1) {
      squareEls[index].textContent = 'o' 
  }
})
  if (winner === null){
    // turn *= -1
    messageEl.textContent = `Player ${turn === 1 ? 'X' : 'O'} turn`
  } else if (winner === "T"){
    messageEl.textContent = `Tie`
  } else {
    messageEl.textContent = `Player ${winner === 1 ? 'X' : 'O'} wins`
  }
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
  console.log(sqIdx)
}





//// 1) Define the required variables used to track the state of the game////

//// 2) Store cached element references

//// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state

//// 4) The state of the game should be rendered to the user

//// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Build the `getWinner` function

// 8) Create Reset functionality