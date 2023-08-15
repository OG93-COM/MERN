
import { useState } from 'react';
import './App.css';
import ColorChanger from './components/ColorChanger';

function App() {
  const [newColor,setNewColor] = useState("");
  const [showColor,setShowColor] = useState([]);

  const [newSize,setNewSize] = useState(100);
  const [addSize,setAddSize] = useState(100);

  const addColor = (e) => {
    e.preventDefault();
    setShowColor([...showColor,newColor]);
    setNewColor("")
  }

  const setDim = (e) => {
    e.preventDefault();
    setAddSize(newSize)
    console.log(newSize)
  }

  console.log(newColor)
  return (
    <div className="App">
      <div className="mainApp">
          <form onSubmit={(event) => { addColor(event) } }>
            <label className="me-3">Color</label>
            <input type="text" className="inputStyl me-3" onChange={ (e) =>  setNewColor( e.target.value) } value={newColor}></input>
            <button className="btn btn-primary">Add</button>
          </form>

          <form onSubmit={ (event) => {setDim(event)} }>
            <input type="number" className="inputStyldim me-3" onChange={ (e) =>  setNewSize( e.target.value) } ></input>
            <button className="btn btn-primary">Set Size</button>
            </form>
          
          
          <ColorChanger theColorChanger= {showColor} newSizeChanged={addSize}  />

      </div>
      
    </div>
  );
}

export default App;
