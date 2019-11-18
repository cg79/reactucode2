import React from 'react';
import { MobxService } from './services/MobxService';

class Counter2 extends React.Component {

   myData = {
     counter: 0
   }; 

   mobixService = null;
   proxy = null;
   updateState = () => {
     this.setState({a: new Date()});
   }

    constructor() {
      super();
      
      this.mobixService = new MobxService(this.updateState).watch(this.myData);
      this.myData = this.mobixService.subscribe('counter', (a, b) => {
        console.log(a,b);
      });

    }
    inc = () => {
      this.myData.counter++;
    }

    dec = ()  => {
      this.myData.counter--;
    }
    
    render() {
      return (
      <div>
        <button 
        onClick={this.dec}
        >-</button>

        <input type="text" value={this.myData.counter} ></input>

        <button  onClick={this.inc}>+</button>
      </div>);
    }
  }

export default Counter2;  