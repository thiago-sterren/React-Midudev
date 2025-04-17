import { winner_combos } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of winner_combos) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }}
      return null
    }

export const checkEndGame = (newBoard) => {
    // revisamos si hay empate. esto ocurre cuando todos los espacios están ocupados y no hay ganador
    return newBoard.every((square) => square !== null)
    }