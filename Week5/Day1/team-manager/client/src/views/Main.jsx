import React, { useEffect, useState } from 'react'
import DisplayPlayerList from '../components/DisplayPlayerList'
import {Link} from "react-router-dom"
import SubNavList from '../components/SubNavList';

const Main = (props) => {

  const {listPageIsActive, setListPageIsActive} = props;
    
  useEffect(() => {
    setListPageIsActive(true);
    
  },[]);

  const {managerPlayerIsActive, setManagerPlayerIsActive} = props;
    
    useEffect(() => {
        setManagerPlayerIsActive(true);
        
      
    },[]);
  

  return (
        
        <div className='content'>
            <h3>Manager Players</h3>
            
            <SubNavList 
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}/>
            <DisplayPlayerList/>

        </div>

  )
}

export default Main