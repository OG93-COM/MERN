import logo from './logo.svg';
import './App.css';
import SaleItem from './components/SaleItem';

function App() {
    return (
          <div className="App">
              <SaleItem theName={ "Doe, Jane" } age={ 45 } hairColor={ "Black" } />
              <SaleItem theName={ "Smith, John" } age={ 88 } hairColor={ "Brown" } />
              <SaleItem theName={ "Fillmore, Millard" } age={ 50 } hairColor={ "Brown" } />
              <SaleItem theName={ "Smith, Maria" } age={ 66 } hairColor={ "Brown" } />
          </div>
     );
  }
  
  

export default App;
