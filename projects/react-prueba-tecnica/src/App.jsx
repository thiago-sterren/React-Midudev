import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
//import { Otro } from './Components/Otro.jsx'


export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }
    
    return (
        <main>
            <h1>Kitties App</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words from ${fact}`} />}
            <button onClick={(handleClick)}>I want a new kittie fact</button>
            {/*<Otro fact={fact}/>*/}
        </main>
    )
}