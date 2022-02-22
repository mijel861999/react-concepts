import React from "react"

const Component = () => {

  useEffect(() => {

    const mouseMove = (e) => {
      const coors = {
        x: e.x,
        Y: e.y
      }

      console.log(coors)
    }

    window.addEventListener('mousemove', mouseMove)
  
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  

  return(
    <h1>Batman</h1>
  )
}

export const useEffect = () => {


    const [count, setCount] = useState(0)
    const [isComponent, setIsComponent] = useState(true)

    const handleHide = () => {
        setIsComponent( !isComponent)
    }

    const handleAdd = () => {
        setCount( count + 1 )
    }

    return (
        <div>
            <h1>Use effect</h1>
            <p>{ count }</p>
            <button onClick={ handleAdd }>+1</button>

            <br></br>

            { isComponent && <Component /> }
            <button onClick={ handleHide }>Ocultar Batman</button>
        </div>
    )
}