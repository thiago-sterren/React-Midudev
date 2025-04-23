export const checkWinnerFrom = (boardToCheck) => {
    const ROWS = 6
    const COLUMNS = 7

    for (let col = 0; col < COLUMNS; col++) {
        for (let row = 0; row < ROWS; row++) {
            const playerTurn = boardToCheck[col][row]
            if (!playerTurn) continue

            if (col + 3 < COLUMNS && // chequeo que la posible combinacion ganadora no se pase de las dimensiones del tablero
                boardToCheck[col+1][row] === playerTurn &&
                boardToCheck[col+2][row] === playerTurn &&
                boardToCheck[col+3][row] === playerTurn) {
                return playerTurn // chequeo si hay 4 en linea hacia la derecha, si hay devuelvo al jugador ganador
            }

            if (row + 3 < ROWS && // chequeo que la posible combinacion ganadora no se pase de las dimensiones del tablero
                boardToCheck[col][row+1] === playerTurn &&
                boardToCheck[col][row+2] === playerTurn &&
                boardToCheck[col][row+3] === playerTurn) {
                return playerTurn // chequeo si hay 4 en linea hacia arriba, si hay devuelvo al jugador ganador
            }

            if (row + 3 < ROWS && col + 3 < COLUMNS && // chequeo que la posible combinacion ganadora no se pase de las dimensiones del tablero
                boardToCheck[col+1][row+1] === playerTurn &&
                boardToCheck[col+2][row+2] === playerTurn &&
                boardToCheck[col+3][row+3] === playerTurn) {
                return playerTurn // chequeo si hay 4 en linea hacia arriba a la derecha, si hay devuelvo al jugador ganador
            }

            if (row - 3 >= 0 && col + 3 < COLUMNS && // chequeo que la posible combinacion ganadora no se pase de las dimensiones del tablero
                boardToCheck[col+1][row-1] === playerTurn &&
                boardToCheck[col+2][row-2] === playerTurn &&
                boardToCheck[col+3][row-3] === playerTurn) {
                return playerTurn // chequeo si hay 4 en linea hacia abajo a la derecha, si hay devuelvo al jugador ganador
            }
        }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    // revisamos si hay empate. esto ocurre cuando todos los espacios están ocupados y no hay ganador
    return newBoard.every(column => column.every(slot => slot !== null))
    //return boardToCheck.flat().every(slot => slot !== null)
    // esta es otra forma de recorrer la matriz, .flat() convierte el array de arrays en un solo array, entonces podemos
    // recorrerlo mas sencillamente
}