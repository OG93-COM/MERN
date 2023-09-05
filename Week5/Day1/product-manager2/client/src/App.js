
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './Views/Main';
import DisplayOneProduct from './Component/DisplayOneProduct';
import PageNotFound from './Views/PageNotFound';

function App() {
  return (
    <div className="App">
      <h1>Product Manager II</h1>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="api/products/:id" element={ <DisplayOneProduct/> } />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
