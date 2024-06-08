document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target
    let position = square.id

    if (!isGameOver()) {
        handleMove(position)
        if (win) {
            setTimeout(function () {
                alert(`Player '${symbols[playerTime]}' venceu!!!`)
            }, 100)
        }
        updateSquare(square)
    }
}

function updateSquare(square) {
    let position = square.id
    let symbol = board[position]

    if (symbol !== '') {
        square.innerHTML = `<div class='${symbol}'></div>`
    }
}

function updateSquares() {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if (symbol !== '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}