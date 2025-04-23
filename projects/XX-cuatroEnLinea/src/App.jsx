import { useState, useEffect } from 'react'
import './App.css'
import { players } from './constants'
import { resetGameStorage, saveGameToStorage } from './logic/storage'
import { Board } from './components/Board'
import { EndGameModal } from './components/EndGameModal'
import { PlayerTurnSection } from './components/PlayerTurnSection'
import confetti from 'canvas-confetti'
import { checkWinnerFrom, checkEndGame } from './logic/board'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('connectFour_board')
    if (!boardFromStorage || boardFromStorage === 'undefined') {
      // Si es null, undefined o la cadena "undefined", devuelve un valor por defecto
      return Array.from({ length: 7 }, () => Array(6).fill(null))

    }
    try {
      return JSON.parse(boardFromStorage) // si board no es nulo ni undefined, se intenta parsear el valor que almacena
    }
    catch (error) {
        console.error("Error al parsear JSON:", error) // controlamos el error en caso de que lo haya al parsear el valor almacenado
        return Array.from({ length: 7 }, () => Array(6).fill(null)) // Valor por defecto en caso de error
    }
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('connectFour_playerTurn')
    if (!turnFromStorage || turnFromStorage === 'undefined') {
      // Si es null, undefined o la cadena "undefined", devuelve un valor por defecto
      return players.R;
    }
    try {
      return JSON.parse(turnFromStorage); // si turn no es nulo ni undefined, se intenta parsear el valor que almacena
    } catch (error) {
        console.error('Error al parsear JSON:', error); // controlamos el error en caso de que lo haya al parsear el valor almacenado
        return players.R; // Valor por defecto en caso de error
      }
  })

  const [winner, setWinner] = useState(null) // null no hay ganador, false empate, true hay ganador

  const resetGame = () => {
    setBoard(Array.from({ length: 7 }, () => Array(6).fill(null))) // seteamos todos los estados a los que corresponderian a un juego nuevo
    setTurn(players.R)
    setWinner(null)
    resetGameStorage() // vaciamos los valores de board y turn en el localStorage
  }

  const updateEverything = (columnIndex) => {
      if (board[columnIndex].every(slot => slot !== null) || winner) return // si todos los huecos de la columna están ocupados
      // o si hay ganador, no hacer nada (no permite sobreescribir)
      const newBoard = board.map(col => [...col]); // copia profunda del tablero, clonando cada columna individualmente
      for (let row = 0; row < newBoard[columnIndex].length; row++) {
        if (newBoard[columnIndex][row] === null) {
          newBoard[columnIndex][row] = turn // actualizamos la casilla con el simbolo correspondiente a quien tiene el turno
          break // cortamos porque la ficha debe tomar el primer lugar vacio que encuentre en la columna y ya
        } 
      }
      setBoard(newBoard) // actualizamos el tablero
      const newTurn = turn === players.R ? players.B : players.R // cambiamos el turno al siguiente jugador
      setTurn(newTurn) // actualizamos el turno
      const newWinner = checkWinnerFrom(newBoard) // revisamos si hay un ganador
      if (newWinner) {
        confetti() // tiramos confeti porque
        setWinner(newWinner) // hay ganador
      }
      else if (checkEndGame(newBoard)) { // revisamos si ya no hay más espacios vacíos
        setWinner(false) // empate
      }
    }

  useEffect( // usamos useEffect para guardar el estado del juego en el localStorage
      () => { // el primer parametro que le pasamos es una funcion a ejecutar la primera vez que se renderiza el componente
        saveGameToStorage(board, turn)
      }, [board, turn] // el segundo parametro es un array de dependencias, si cambia alguna de las variables que hay dentro,
    ) // se vuelve a ejecutar la funcion

  return (
    <main className='board'>
      <h1>Cuatro en linea</h1>
      <PlayerTurnSection player={turn}/>

      <Board board={board} updateEverything={updateEverything}/>

      <button type='button' onClick={resetGame}>Reiniciar partida</button>

      <EndGameModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
