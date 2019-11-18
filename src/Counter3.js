import React from 'react';
import { MobxService } from './services/MobxService';

class Counter3 extends React.Component {

  myData = {
    counter: 0
  };

  mobixService = null;
  proxy = null;
  updateState = () => {
    this.setState({ a: new Date() });
  }
  rendered = () => { }

  constructor () {
    super();

    this.mobixService = new MobxService(this.updateState).watch(this.myData);
    this.myData = this.mobixService.subscribe('counter', (a, b) => {
      console.log(a, b);
    });

  }

  renderCounter() {
    var i = 0;
    // eslint-disable-next-line no-unused-vars
    const rrr = ()  =>{
      setTimeout(() => {
        if (i > 900) {
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

  render() {
    return (
      <div>
        <button
          onClick={this.dec}
        >-</button>

        <input type="text" value={this.myData.counter} ></input>

        <button onClick={this.inc}>+</button>
      </div>);
  }
}

export default Counter3;  