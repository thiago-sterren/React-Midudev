import { useEffect, useState } from 'react'
import { fetchImage } from '../services/facts.js'

export function useCatImage({ fact }) { // custom hook, siempre comienza con use...
    const [imageUrl, setImageUrl] = useState()
    
    // efecto que recupera la imagen cada vez que cambia la cita
    useEffect(() => {
        if (!fact) return // si fact es nulo o undefined, este return detiene la ejecución del efecto
        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        // explicación de manipulación de este array:
        // split nos ayuda a dividir un string por tokens o separadores, en este caso le decimos que es un espacio.
        // luego slice nos ayuda a crear un nuevo array a partir de otro,
        // en este caso con los elementos del 0 al 3 (no incluyendo al elemento de index 3).
        // por ultimo, join nos ayuda a unir los elementos de un array en un string, en este caso con un espacio
        fetchImage(threeFirstWords).then(newImageUrl => setImageUrl(newImageUrl))
    }, [fact])

    return { imageUrl }
}