import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'

export const UseLayoutEffect = () => {
  const [state, setState] = useState()
  const buttonRef = useRef(null)

  const printDate = () => {
    setState(new Date().toTimeString())
  }

  useEffect(() => {
    console.log('useEffect iniciando')
  
    return () => {
      console.log('use Effect terminado')
    }
  }, [])
  

  useLayoutEffect(() => {

    buttonRef.current.addEventListener('click', printDate)
    console.log('useLayouteffect inicando')
  
    return () => {
      console.log('useLayoutEffect terminado')
      buttonRef.current.removeEventListener('click', printDate)
    };
  }, [])

  console.log('componente renderizado')
  return (
    <div>
      <h1>useLayoutEffect</h1>
      <hr />

      <h1>{state}</h1>
      <button
        ref={buttonRef}
      >
        Check date
      </button>

      <RandomNumbers />
    </div>
  )
}


export const RandomNumbers = () => {
	// Inicializa el estado de nuestro componente
	const [number, setNumber] = useState(0)
	
	//En este caso usarás el segundo hook, intenta ver el cambio que tiene ejecutándolo
	//con useEffect
	useLayoutEffect(() => {
		//Aquí solo te aseguras que el efecto se efectúe solo si el number es 0
		if(number === 0){
			setNumber(10 * Math.random() * 200 + Math.random())
		}
		// En el array ponemos el estado para ejecutar el hook cuando cambie
	}, [number])

	const createInterval = () => {
	// este interval ayudará a ver mejor lo que pasa con useLayoutEffect y useEffect
	  let intervalTest = setInterval(() => {
		  setInterval(0)
	  }, 10)
	
	// El timeout es para evitar problemas con el interval y dejar de ejecutarlo a los
	// 10 segundos
	  setTimeout(() => {
		clearInterval(intervalTest)
	  },10000)
	}

	return(
		<div>
			<p>{number}</p>
			<button onClick={() => setNumber(0)}>Change number</button>
			<button onClick={createInterval}>Run test</button>
		</div>
	)
}

