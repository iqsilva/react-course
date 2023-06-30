import React from 'react'

const Challenge = () => {
    const a = 3;
    const b = 4;

  return (
    <div>
        <div>
            <p>valor 1: {a}</p>
            <p>valor 2: {b}</p>
        </div>
        <div>
            <button onClick={() => console.log(a + b)}>Soma</button>
        </div>
    </div>
  )
}

export default Challenge