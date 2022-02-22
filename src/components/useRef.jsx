import React from 'react'

export const useRef = () => {

    const inputRef = useRef('Hola')
    console.log(inputRef)


    const handleFocus = () => {
        document.querySelector('input').focus()
        document.querySelector('input').select()
        inputRef.current.select()
    }

  return (
    <div>
        <h1>Use Ref</h1>
        <hr />

        <input 
            ref={inputRef}
            placeholder='Su nombre'
        />

        <button
            onClick={ handleFocus } 
        >
            Focus
        </button>
    </div>
  )
}
