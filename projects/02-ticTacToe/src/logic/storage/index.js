export const saveGameToStorage = (board, turn) => {
    window.localStorage.setItem('board', JSON.stringify(board))// guardamos el tablero actual en el localStorage
    // el localStorage solo guarda strings, por eso se hace el stringify
    window.localStorage.setItem('turn', JSON.stringify(turn))// guardamos el turno actual en el localStorage
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')// eliminamos el tablero del localStorage
    window.localStorage.removeItem('turn')// eliminamos el turno del localStorage
}