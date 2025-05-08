import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact() {
    const [fact, setFact] = useState()
    
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    // efecto que recupera la cita al recargar la página
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}