import React from 'react'

const Newhookresult = (props) => {

  return (
    <div>
        
        <div className="container px-4 mb-3">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3 border bg-light">FirstName : </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light secrect-form">{props.firstnm}</div>
                </div>
            </div>
        </div>

        <div className="container px-4 mb-3">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3 border bg-light">LastName : </div>  
                </div>
                <div className="col">
                    <div className="p-3 border bg-light secrect-form">{props.lastnm}</div>
                </div>
            </div>
        </div>

        <div className="container px-4 mb-3">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3 border bg-light">Email : </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light secrect-form">{props.mail}</div>
                </div>
            </div>
        </div>

        <div className="container px-4 mb-3">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3 border bg-light">Password : </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light secrect-form">{props.pwsd}</div>
                </div>
            </div>
        </div>

        <div className="container px-4 mb-3">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3 border bg-light">Confirmed Password : </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light secrect-form">{props.pwsd2}</div>
                </div>
            </div>
        </div>
    
    </div>

  )
}

export default Newhookresult