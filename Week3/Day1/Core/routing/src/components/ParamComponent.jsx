import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComponent = (props) => {
    const {word,color,backGroundColr} = useParams()
  return (
    <div>
        { isNaN(word) ?
            <p style={ color ? { color: color, backgroundColor: backGroundColr  } :null }> This is Word: {word}</p> 
            
        
        : 
            <p>This is Number : {word}</p> 
        
    }
       

    </div>
  )
}

export default ParamComponent