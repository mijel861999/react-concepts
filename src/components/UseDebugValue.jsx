import React, { useState, useDebugValue } from 'react'

const UseDebugValue = () => {

  const [isOnline, setIsOnline] = useState(null)

  useDebugValue(isOnline? 'Online': 'Offline')

  return (
    <div>
        <h1>Use Debug Value</h1>
    </div>
  )
}

export default UseDebugValue
