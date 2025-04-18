import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  
  // creamos un efecto que se encargará de actualizar la posición del puntero
  // y de activar/desactivar el seguimiento del puntero
  useEffect(() => {
    // creamos la función handleMouseMove que se encargará de actualizar la posición del puntero
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY})
    }

    // suscribimos el evento 'pointermove' al objeto window solo si enabled es true
    if (enabled) {
      window.addEventListener('pointermove', handleMouseMove)
    }

    // cleanup function, se ejecuta cuando el componente se desmonta
    // o cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    // en este caso, limpiamos las suscripciones al evento 'pointermove'
    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
    }
  }, [enabled])
  // se puede pasar en el 2do parametro:
  // [] -> el efecto se ejecuta una sola vez al montar el componente
  // [enabled] -> el efecto se ejecuta cada vez que cambia el estado de enabled (pueden haber cuantas dependencias se quieran)
  // undefined -> el efecto se ejecuta cada vez que se renderiza el componente (esto es malo porque puede causar un bucle infinito de renderizado)


  // activamos/desactivamos un classname del body con useEffect 
  useEffect(() => {
    document.body.classList.toggle('cross-cursor', enabled) // .toggle() nos permite agregar o quitar una clase de un elemento
    // en este caso, la presencia o no de la clase depende del segundo parametro, en este caso 'enabled'
    // si enabled es true, se agrega la clase 'cross-cursor' al body, si es false, se quita

    //cleanup function
    // limpiamos la clase 'cross-cursor' del body cuando el componente se desmonta
    // o cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      document.body.classList.remove('cross-cursor') 
    }
  }, [enabled])

  return (
    <>
      <div style={{
        display: enabled ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => {setEnabled(!enabled)}}>
        {enabled ? 'Desactivar' : 'Activar'} seguimiento de puntero
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App