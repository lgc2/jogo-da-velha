document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})
document.getElementById('btn-reset')
    .addEventListener('click', removeSymbolDivAndResetGame)

function handleClick(event) {
    let square = event.target
    let position = square.id

    if (!isGameOver()) {
        handleMove(position)
        updateSquare(square)
        if (hasWin) {
            for (let i = 0; i < winPositions.length; i++) {
                let winSquare = document.getElementById(winPositions[i])
                winSquare.style.backgroundColor = 'white'
            }

            setTimeout(function () {
                alert(`Player '${symbols[playerTime]}' venceu!!!`)
            }, 100)
        }
    }
}

function updateSquare(square) {
    let position = square.id
    let symbol = board[position]

    if (symbol !== '') {
        square.innerHTML = `<div class='${symbol}'></div>`
    }
}

function removeSymbolDivAndResetGame() {
    resetGame()

    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.style.backgroundColor = 'beige'

        if (square.querySelector('div') != null) {
            let child = square.querySelector('div')
            child.remove()
        }
    })
}