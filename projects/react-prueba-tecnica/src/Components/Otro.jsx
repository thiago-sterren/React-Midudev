import { useCatImage } from '../hooks/useCatImage.js'

export function Otro ({ fact }) {
    const { imageUrl } = useCatImage({ fact }) // la imagen siempre sera la misma y su texto tambien
    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}

// no es un componente muy util/pulido en cuanto a funcionamiento, pero nos ayuda a ver como podemos reutilizar
// el custom hook useCatImage, haciendo que varios elementos img tengan cada uno su propio
// estado de imagen (es decir que, salvo casualidades, las imagenes seran todas distintas)
// y tambien su propio useEffect, aunque dependeran todas del mismo fact, debido a que
// en este caso es uno solo el que estamos almacenando en la pagina