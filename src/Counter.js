import React from 'react';
import './Counter.css';

class Counter extends React.Component {

    constructor() {
      super();
      this.state = {
        counter: 0,
        name: 'xx'
      };
      this.dec = this.dec.bind(this);
    }
    inc = () => {
      debugger;
      // this.state.counter = 7;
      this.setState(
        {
          counter: this.state.counter +1
        }
      );
    }

    dec() {
      this.setState(
        {
          counter: this.state.counter -1
        }
      );
    }
    
    render() {
      return (
      <div className='counter1'>
        <label>hello</label>
        <button 
        onClick={this.dec}
        >-</button>

        <input type="text" value={this.state.counter} ></input>

        <button  onClick={this.inc}>+</button>
      </div>);
    }
  }

export default Counter;  