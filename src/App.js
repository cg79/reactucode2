import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoAdd from './ToDoAdd';
import Counter1 from './Counter1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter1 init={7}></Counter1>
        <ToDoAdd></ToDoAdd>
      </header>
    </div>
  );
}

export default App;
