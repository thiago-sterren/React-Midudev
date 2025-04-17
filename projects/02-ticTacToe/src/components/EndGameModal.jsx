import { Square } from './Square'

export function EndGameModal({winner, resetGame}) {
    if (winner === null) return null // si no hay ganador, no mostrar nada
    const winnerText = winner === false ? 'Empate' : 'El ganador es:'
    const divClassName = winner === false ? 'text draw' : 'text champion'
    return (
        <section className='winner'>
            <div className={divClassName}>
                <h2>
                    {winnerText}
                </h2>
    
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
    
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
        )
    }