import { Square } from './Square'
import { turns } from '../constants.js'

export const TurnSection = ({turn}) =>{
    return (
        <section className='turn'>
            <Square isSelected={turn === turns.X}>
                {turns.X}
            </Square>
            <Square isSelected={turn === turns.O}>
                {turns.O}
            </Square>
        </section>
        )
    }