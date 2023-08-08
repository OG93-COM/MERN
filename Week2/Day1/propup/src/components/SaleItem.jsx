import React from 'react'

const SaleItem = (props) => {
  return (
    <div>
      <h1>{props.theName}</h1>
      <p>Age : {props.age}</p>
      <p>Hair Color :{props.hairColor}</p>

    </div>
  )
}

export default SaleItem