import logo from './logo.svg';
import './App.css';
import { MiModulo1 } from './miModulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a la App de Maria Palacios
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MiModulo1/>  
    </div>
  );
}

export default App;
