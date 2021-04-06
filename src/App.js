import logo from './logo.svg';
import './App.css';
import SuperComponent from './superComponent';
import HidePassword from './hidePassword';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Audrey
        </a>
      </header>
      {/* <SuperComponent>Salut c est Audrey</SuperComponent> */}
      <HidePassword>toto</HidePassword>
    </div>
  );
}

export default App;
