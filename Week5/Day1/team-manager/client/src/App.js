import {Routes, Route} from "react-router-dom"
import './App.css';
import Main from "./views/Main";
import PageNotFound from "./views/PageNotFount";
import AddPlayer from "./components/AddPlayer";
import StatusPlayer from "./views/StatusPlayer";

import Home from "./views/Home";
import NavPlayer from "./views/NavPlayer";
import { useState } from "react";

function App() {

  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managerPlayerIsActive, setManagerPlayerIsActive] = useState(true);

  
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>Team Manager</h2>
      </header>
          <NavPlayer 
          managerPlayerIsActive={managerPlayerIsActive}
          setManagerPlayerIsActive={setManagerPlayerIsActive} />

      <Routes>
          <Route path={"/"} element={<Home/>}/> 
          <Route path={"/players/"} element={<Main 
                managerPlayerIsActive={managerPlayerIsActive}
                setManagerPlayerIsActive={setManagerPlayerIsActive}
                listPageIsActive={listPageIsActive} 
                setListPageIsActive={setListPageIsActive} />}/> 

          <Route path={"/addPlayer/"} element={<AddPlayer 
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive} />}/> 

          <Route path={"/status/game/:gameId"} element={<StatusPlayer
                managerPlayerIsActive={managerPlayerIsActive}
                setManagerPlayerIsActive={setManagerPlayerIsActive} />}/> 


          <Route path={"*"} element={<PageNotFound/>}/> 
        </Routes>
    </div>
  );
}

export default App;
