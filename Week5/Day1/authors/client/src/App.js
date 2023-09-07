import './App.css';
import FormAuthors from './components/FormAuthors';
import {Routes, Route} from "react-router-dom"
import Main from './views/Main';
import PageNotFound from './views/PageNotFound';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Favorite Authors</h2>
      </header>
      <div>
        <Routes>
          <Route path={"/"} element={<Main/>}> </Route>
          <Route path={"/addAuthor/"} element={<FormAuthors/>}> </Route>
          <Route path={"/edit/:id"} element={<EditAuthor/>}> </Route>
          <Route path={"*"} element={<PageNotFound/>}> </Route>
        </Routes>
        
        
      </div>
    </div>
  );
}

export default App;
