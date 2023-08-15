import React from 'react'

const ColorChanger = (props) => {
    const {theColorChanger} = props
    const {newSizeChanged} = props
  return (
    
    theColorChanger.map( (color,idx)  => {
        return ( <div key={idx} className="boxColor flexBox" style={{
            backgroundColor: color,
            width: newSizeChanged + "px",
            height: newSizeChanged + "px"
        }}>

        </div> )
      } ) 
  )
}

export default ColorChanger