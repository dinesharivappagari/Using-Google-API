import logo from './logo.svg';
import './App.css';
import BookList from './Booklist';
/*{
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
}*/
function App() {
  return (
    <div className="App">
      <h1>Book Search App</h1>
      <BookList />
    </div>
  );
}

export default App;
