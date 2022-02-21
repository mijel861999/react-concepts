import { useState, useEffect, useRef } from 'react'
import logo from './logo.svg'
import './App.css'

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

function App() {
  const [count, setCount] = useState(0)
  const [isComponent, setIsComponent] = useState(true)

  // const inputRef = useRef('Hola')
  // console.log(inputRef)

  // useEffect(() => {
  
  // }, [])

  // const handleAdd = () => {
  //   setCount( count + 1 )
  // }

  // const handleHide = () => {
  //   setIsComponent( !isComponent)
  // }

  // const handleFocus = () => {
  //   // document.querySelector('input').focus()
  //   // document.querySelector('input').select()
  //   inputRef.current.select()
  // }
  
  return (
    <div className="App">
      {/* <h1>Use effect</h1>

      <p>{ count }</p>
      <button onClick={ handleAdd }>+1</button>

      <br></br>

      { isComponent && <Component /> }
      <button onClick={ handleHide }>Ocultar Batman</button> */}

      {/* <h1>Use Ref</h1>
      <hr />


      <input 
        ref={inputRef}
        placeholder='Su nombre'
      />

      <button
        onClick={ handleFocus } 
      >
        Focus
      </button> */}

      <h1>Use Layout Effect</h1>
      <hr />
    </div>
  )
}

export default App
