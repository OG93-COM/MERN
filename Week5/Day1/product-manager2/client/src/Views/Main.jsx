import React from 'react'
import FormProduct from '../Component/FormProduct'
import DisplayProduct from '../Component/DisplayProduct'
import { useState } from 'react'

const Main = () => {

    const [refrechState, setRefrechState] = useState(false)

    const refresh = () => {
        setRefrechState(!refrechState)
    }


  return (
        <div>
            <FormProduct refresh={refresh}/>
            <hr/>
            <DisplayProduct refrechState={refrechState}/>
            
        </div>
  )
}

export default Main