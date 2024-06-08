// inicializar variáveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0 // 0 or 1
let hasWin = false
let gameOver = false

let symbols = ['o', 'x']
let winPositions = []

function handleMove(position) {
    if (board[position] === '') {
        board[position] = symbols[playerTime]

        if (!isWin()) {
            if (playerTime === 0) {
                playerTime = 1
            } else {
                playerTime = 0
            }
        }
    }
}

function isWin() {
    let winPossibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    winPossibilities.forEach(winPossibility => {
        if (board[winPossibility[0]] === symbols[playerTime]
            && board[winPossibility[1]] === symbols[playerTime]
            && board[winPossibility[2]] === symbols[playerTime]) {

            winPositions = [
                winPossibility[0],
                winPossibility[1],
                winPossibility[2]
            ]
            hasWin = true
            return hasWin
        }
    })
    return hasWin
}

function isGameOver() {
    let isBoardFilled = true
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            isBoardFilled = false
            break
        }
    }

    if (isWin() || isBoardFilled) {
        gameOver = true
    }
    return gameOver
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', '']
    playerTime = 0
    hasWin = false
    gameOver = false
}