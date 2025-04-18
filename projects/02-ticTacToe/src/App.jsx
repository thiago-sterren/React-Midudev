import { useState, useEffect } from 'react'
import './App.css'
import { turns } from './constants.js'
import { checkEndGame, checkWinnerFrom } from './logic/board.js'
import { EndGameModal } from './components/EndGameModal.jsx'
import { TurnSection } from './components/TurnSection.jsx'
import { TicTacToeBoard } from './components/TicTacToeBoard.jsx'
import { resetGameStorage, saveGameToStorage } from './logic/storage/index.js'
import confetti from 'canvas-confetti'

export function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (!boardFromStorage || boardFromStorage === 'undefined') {
      // Si es null, undefined o la cadena "undefined", devuelve un valor por defecto
      return Array(9).fill(null)
    }
    try {
      return JSON.parse(boardFromStorage) // si board no es nulo ni undefined, se intenta parsear el valor que almacena
    }
    catch (error) {
        console.error("Error al parsear JSON:", error) // controlamos el error en caso de que lo haya al parsear el valor almacenado
        return Array(9).fill(null) // Valor por defecto en caso de error
    }
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if (!turnFromStorage || turnFromStorage === 'undefined') {
      // Si es null, undefined o la cadena "undefined", devuelve un valor por defecto
      return turns.X;
    }
    try {
      return JSON.parse(turnFromStorage); // si turn no es nulo ni undefined, se intenta parsear el valor que almacena
    } catch (error) {
        console.error('Error al parsear JSON:', error); // controlamos el error en caso de que lo haya al parsear el valor almacenado
        return turns.X; // Valor por defecto en caso de error
      }
  })

  const [winner, setWinner] = useState(null) // null no hay ganador, false empate, true hay ganador

  const resetGame = () => {
    setBoard(Array(9).fill(null)) // seteamos todos los estados a los que corresponderian a un juego nuevo
    setTurn(turns.X)
    setWinner(null)
    resetGameStorage() // vaciamos los valores de board y turn en el localStorage
  }
    
  const updateEverything = (index) => {
    if (board[index] || winner) return // si la casilla está ocupada o si hay ganador, no hacer nada (no permite sobreescribir)
    const newBoard = [...board] // hacemos una copia del tablero
    newBoard[index] = turn // actualizamos la casilla con el simbolo correspondiente a quien tiene el turno
    setBoard(newBoard) // actualizamos el tablero
    const newTurn = turn === turns.X ? turns.O : turns.X // cambiamos el turno al siguiente jugador
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
      <h1>Tic Tac Toe</h1>
      <button type='button' onClick={resetGame}>Reiniciar la partida</button>
      
      <TicTacToeBoard board={board} updateEverything={updateEverything}/>

      <TurnSection turn={turn}/>

      <EndGameModal winner={winner} resetGame={resetGame} />
    </main>
  )
}
export default App