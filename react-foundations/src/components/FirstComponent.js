import React from 'react'
import MyComponent from './MyComponent'
// arquivos de estilo
const FirstComponent = () => {
    // essa função faz isso

    /* 
    multi line 
    */
   
  return (
    <div>
        {/* Algum comentário */}
        <h1>Meu primeiro componente</h1>
        <p className='teste'>Meu texto</p>
        <MyComponent/>
    </div>
  )
}

export default FirstComponent