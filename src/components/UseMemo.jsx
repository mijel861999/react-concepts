import React, { useMemo, useState, useEffect } from 'react'


export const UseMemo = () => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)

    const sumarValor1 = () => {
        setN1( n1 + 1)
    }

    const sumarValor2 = () => {
        setN2( n2 + 1)
    }

    const total = useMemo(()=>{
        return n1 + n2
    }, [n1])

    useEffect(() => {
      console.log('Se ejecuta use Effect')
    }, [n1, n2])
    

    return (
        <div>
            <h1>Use Memo</h1>
            <p>{n1}</p>
            <button onClick={sumarValor1}>n1</button>
            <p>{n2}</p>
            <button onClick={sumarValor2}>n2</button>

            <br>
            </br>

            <p>Total: {total}</p>
        </div>
    )
}