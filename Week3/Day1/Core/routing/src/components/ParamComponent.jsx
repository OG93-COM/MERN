import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComponent = (props) => {
    const {word} = useParams()
  return (
    <div>ParamComponent
        { isNaN(word) ?
            <p>This is Word: {word}</p> 
            
        
        : 
            <p>This is Number : {word}</p> 
        
    }
       

    </div>
  )
}

export default ParamComponent