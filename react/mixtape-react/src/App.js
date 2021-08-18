import logo from "./logo.svg";
import "./App.css";

const API_HOST = "http://localhost:5000";
fetch(`https://www.plugco.in/public/take_home_sample_feed`).then(function (
  response
) {
  let data = response.json();
  console.log(data);
  return data;
});

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
