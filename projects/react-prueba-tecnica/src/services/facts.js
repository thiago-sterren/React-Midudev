const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact' 

export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => {
            if (!res.ok) throw new Error('There is something wrong with the quote.') // controlamos que la respuesta al fetch sea correcta
            return res.json()
        })
        .then(data => {
            const { fact } = data
            return fact
        })
        .catch(error => console.error('Error while getting the fact: ', error)) // controlamos cualquier tipo de error que pueda ocurrir
}

// otra posible forma de escribir la funcion. la podemos obtener haciendo ctrl + . mientras estamos
// sobre el nombre de la funcion de arriba, presionando "Convert to async function"

// export const getRandomFact = async () => {
//     try {
//         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
//         if (!res.ok) throw new Error('There is something wrong with the quote: ', error) // controlamos que la respuesta al fetch sea correcta
//         const data = await res.json()
//         const { fact } = data
//         return fact
//     } catch (error) {
//         return console.error('Error while getting the fact: ', error)
//     } // controlamos cualquier tipo de error que pueda ocurrir
// }

export const fetchImage = async (threeFirstWords) => {
    try {
        const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
        if (!res.ok) throw new Error('Error fetching image.')
        const response = await res.json()
        return response.url
    } catch (error) {
        console.error('Error while getting the image:', error)
    }
}