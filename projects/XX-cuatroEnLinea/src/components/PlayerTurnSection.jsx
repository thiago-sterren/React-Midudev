import { Slot } from './Slot.jsx'
import { players } from '../constants.js'

export const PlayerTurnSection = ({player}) =>{
    return (
        <section className='turn'>
            <Slot isSelected={player === players.R}>
                {players.R}
            </Slot>
            <Slot isSelected={player === players.B}>
                {players.B}
            </Slot>
        </section>
        )
    }