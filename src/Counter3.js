import React from 'react';
import { MobxService } from './services/MobxService';

class Counter3 extends React.Component {

  myData = {
    counter: 0,
    test: 'sfsdfsdf',
    numbers: []
  };

  constructor () {
    super();

    new MobxService(this, 'myData')
    .subscribe('counter, test, numbers', () => {
      console.log('rendered')
    });

  }

  renderCounter() {
    var i = 0;
    // eslint-disable-next-line no-unused-vars
    const rrr = ()  =>{
      setTimeout(() => {
        if (i > 2) {
          return;
        }
        this.myData.counter++;
        i++;
        rrr();
      }, 0);
    };

    rrr();

  }
  inc = () => {
    this.renderCounter();

  }

  dec = () => {
    this.myData.counter--;
  }

  testChanged = (e) => {
    console.log('handle change called');
    this.myData.test = e.target.value;
  }

  num = () => {
    this.myData.numbers.push(Math.random());
  }
  
  render() {
    return (
      <div>
        <button
          onClick={this.dec}
        >-</button>

        <input type="text" value={this.myData.counter} ></input>

        <input type="text" value={this.myData.test} onChange={this.testChanged} ></input>

        <button onClick={this.inc}>+</button>

        <button onClick={this.num}>numbers</button>
      </div>);
  }
}

export default Counter3;  