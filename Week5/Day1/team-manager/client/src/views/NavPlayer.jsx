import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const NavPlayer = (props) => {

  const {managerPlayerIsActive, setManagerPlayerIsActive} = props;

  const [styleManagerActive, setStyleManagerActive] = useState("");
  const [styleStatusActive, setStyleStatusActive] = useState("");

  useEffect(() => {
    if (managerPlayerIsActive) {
      setStyleManagerActive("btn btn-outline-primary")
      setStyleStatusActive("btn btn-outline-secondary ms-3")

      console.log("Manager is active "+managerPlayerIsActive)
      

      
    } else {
      setStyleManagerActive("btn btn-outline-secondary")
      setStyleStatusActive("btn btn-outline-primary ms-3")
      console.log("Manager is active " +managerPlayerIsActive)
    }
  }, [managerPlayerIsActive]);
    
  return (
        <nav>
            <Link to={"/players/"}><button type="button" className={styleManagerActive}>Manager Players</button></Link>
            <Link to={"/status/game/1"}><button type="button" className={styleStatusActive}>Manager Players Status</button></Link>
        </nav>
  )
}

export default NavPlayer