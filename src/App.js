import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to my 1st CICD Application. This is the first change in the code.😊😍
        </p>
        <p>
          <ul>
            <li>1.create react app</li>
            <li>2.create github repository</li>
            <li>3.create Azure portal account</li>
            <li>4.create App service</li>
            <li>4.monitor github action</li>
            <li>5.deploy the app</li>
            <li>6.check the app</li>
            <li>7.check the logs</li>
            <li>8.check the deployment</li>
          </ul>
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
    </div>
  );
}

export default App;
