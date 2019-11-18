import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

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

        <Counter></Counter>
        <Counter1 init={1}></Counter1>
        <Counter2 init={1}></Counter2>
        <Counter3 init={1}></Counter3>
      </header>
    </div>
  );
}

export default App;
