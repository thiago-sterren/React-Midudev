import { Square } from './Square'

export const TicTacToeBoard = ({board, updateEverything}) => {
    return (
        <section className='game'>{
            board.map((value, index) => {
              return (
                <Square key={index} index={index} updateBoard={updateEverything}>
                    {value}
                </Square>
              )
            })}
        </section>
        )
    }