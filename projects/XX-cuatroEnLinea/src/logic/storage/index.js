export const saveGameToStorage = (board, playerTurn) => {
    window.localStorage.setItem('connectFour_board', JSON.stringify(board))// guardamos el tablero actual en el localStorage
    // el localStorage solo guarda strings, por eso se hace el stringify
    window.localStorage.setItem('connectFour_playerTurn', JSON.stringify(playerTurn))// guardamos el turno actual en el localStorage
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('connectFour_board')// eliminamos el tablero del localStorage
    window.localStorage.removeItem('connectFour_playerTurn')// eliminamos el turno del localStorage
}