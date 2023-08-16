
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>

      <Link to="/Home">Home</Link>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>

      </Routes>

      
    </div>
  );
}

export default App;
