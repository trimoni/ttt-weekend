/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner
// board represents state of board
// turn represents tracking whose turn it is
// winner represents a win/tie

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sq')
//const squareEls = document.querySelectorAll(section > div)
const messageEl = document.querySelector('#message')
// console.log(squareEls)
const resetBtnEl = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(squarre) {
  squarre.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render() 
  resetBtnEl.setAttribute('hidden', true)
}

function render() {
  resetBtnEl.removeAttribute('hidden')
  resetBtnEl.className = 'retry'
  board.forEach((square, index) => {
    if(square === 1) {
      squareEls[index].textContent = '🌞' 
    } if (square === -1) {
      squareEls[index].textContent = '🌚' 
    } else if (square === null){
      squareEls[index].textContent = ''
    } 
})
  if (winner === null){
    // !winner works too
    messageEl.textContent = `Player ${turn === 1 ? '🌞' : '🌚'} turn`
  } else if (winner === "T"){
    messageEl.textContent = `🌧️🌧️🌧️TIE🌧️🌧️🌧️`
  } else {
    messageEl.textContent = `Player ${turn === 1 ? '🌚' : '🌞'} DOMINATES!`
    confetti.start(2000)
  }
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if(board[sqIdx] || winner !== null){
    return
  }
  board[sqIdx] = turn
  turn *= -1
  winner = getWinner()
  render()
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
      return 1
    } else if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
      return -1
    } 
  }
  if (!board.includes(null)){
    return "T"
  }
  return null
}



//// 1) Define the required variables used to track the state of the game////

//// 2) Store cached element references

//// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state

//// 4) The state of the game should be rendered to the user

//// 5) Define the required constants

//// 6) Handle a player clicking a square with a `handleClick` function

//// 7) Build the `getWinner` function

//// 8) Create Reset functionality