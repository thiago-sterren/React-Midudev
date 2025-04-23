import { Slot } from "./Slot"

export const EndGameModal = ({ winner, resetGame }) => {
    if (winner === null) return null
    const winnerText = !winner ? 'Empate' : `El ganador es:`
    const divClassName = !winner ? 'text draw' : 'text winner'
    return (
        <section className='winner'>
            <div className={divClassName}>
                <h1>
                    {winnerText}
                </h1>

                <header className='win'>
                    {winner && <Slot>{winner}</Slot>}
                </header>

                <footer>
                    <button onClick={resetGame}>
                        Iniciar una nueva partida
                    </button>
                </footer>
            </div>
        </section>
    ) 
}