import './App.css';
import BirthdayAddPlus from './components/BirthdayAddPlus';

function App() {
  return (
    <div>
      <BirthdayAddPlus name={"Jane, Doe"} age={45} hairCol={"Black"} />
      <BirthdayAddPlus name={"Smith, John"} age={88} hairCol={"Brown"} />
    </div>
  );
}

export default App;
