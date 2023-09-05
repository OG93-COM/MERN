
import './App.css';
import DisplayProduct from './Component/DisplayProduct';
import FormProduct from './Component/FormProduct';

function App() {
  return (
    <div className="App">
      <h1>Product Manager II</h1>
      <FormProduct/>
      <hr/>
      <DisplayProduct/>
    </div>
  );
}

export default App;
