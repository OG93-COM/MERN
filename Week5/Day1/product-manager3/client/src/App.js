
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './Views/Main';
import DisplayOneProduct from './Component/DisplayOneProduct';
import PageNotFound from './Views/PageNotFound';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <h1>Product Manager III</h1>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="api/products/:id" element={ <DisplayOneProduct/> } />
        <Route path="/api/products/edit/:id" element={<UpdateProduct />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
