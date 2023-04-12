import './App.css';

function callApi() {
    fetch('https://simple-node-pat.herokuapp.com/details', { method: 'GET' })
        .then(data => data.json())
        .then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <button onClick={callApi}>Call API</button>
        </header>
    </div>
  );
}

export default App;
