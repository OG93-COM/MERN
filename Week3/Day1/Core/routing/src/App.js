
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ParamComponent from './components/ParamComponent';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>

      <Link to="/Home">Home</Link>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        
        <Route path="/:word" element={<ParamComponent/>} ></Route>


      </Routes>

      
    </div>
  );
}

export default App;
