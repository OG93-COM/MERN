import React from 'react'

const AlertBox = (props) => {
  return (
    <div>
        
        <div className="alert alert-danger">{props.alertBoxName} must be at least {props.setupLenth} characters</div>

    </div>
  )
}

export default AlertBox