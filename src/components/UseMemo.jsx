import React, { useState, useMemo } from 'react'


export const UseMemo = () => {

    const [count, setCount] = useState(0)

    const value = () => {
        console.log('Value')
        return 10000
    };

    const increment = () => {
        console.log('Increment')
        setCount(count + 1)
    }

    const valueMemorizado = useMemo(()=>
        value()
    , [])



    return (
        <div>
            <h1>Use Memo</h1>
            <p>{count}</p>
            <button onClick={increment}>
                +1
            </button>
        </div>
    )
}