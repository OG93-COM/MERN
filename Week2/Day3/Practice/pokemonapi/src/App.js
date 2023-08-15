import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [pokeName,setPokeName] = useState("");

  

    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
      return response.json()
    }).then(response => {
      console.log(response.results)
      
    })
    
    .catch(err => {
      console.log(err);
    })

  
  
  
  return (
    <div className='App'>
      
        <button type="button" className="btn btn-primary mt-3 mb-2">Fetch Pokemon</button>
        <ul className="list-group">
          <li className="list-group-item">Pokemon Name</li>
          
        </ul>
      
    </div>
  );
}

export default App;
