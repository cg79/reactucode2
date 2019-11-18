import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Counter1 from './Counter1';
import CounterInitialValue from './CounterInitialValue';

function App() {

  const priorityChanged = (v) => {
    initialValues.val = v;
  }

  const initialValues = {
    val: 3,
    onChange: priorityChanged
  };

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

        <CounterInitialValue props={initialValues} ></CounterInitialValue>
      </header>
    </div>
  );
}

export default App;
