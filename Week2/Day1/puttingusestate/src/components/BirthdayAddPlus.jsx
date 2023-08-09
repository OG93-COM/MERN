import React, { useState } from 'react'

const BirthdayAddPlus = (props) => {
    const [birth,setBirth] = useState(props.age);
    const [colr,setColr] = useState(props.hairCol)

  return (
    <div className='container'>
        
        <div className="card">
            <div className="card-body">
                <h2>{props.name}</h2>
                <p>The Age is {birth}, and he was born in {2023 - birth}</p>
                <p>Hair color : {colr}</p>
                <button type="button" className="btn btn-primary"   onClick={ () => { setBirth(birth + 1) } } >{props.name} ++</button>
                <button type="button" className="btn btn-secondary" onClick={ () => { setBirth(birth - 1) } } >{props.name} --</button>
            </div>
        </div>
    </div>
  )
}

export default BirthdayAddPlus