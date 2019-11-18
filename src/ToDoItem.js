import React from 'react';
import CounterInitialValue from './CounterInitialValue';

class ToDoItem extends React.Component {

    constructor() {
      debugger;
      super();
      this.state = {
        priority: 0,
        name: ''
      };
    }
    inc = (v) => {
      debugger;
      const {priority} = this.state;
      this.setState(
        {
          priority: priority +5
        }
      );
    }

    dec = () => {
      debugger;
      this.setState(
        {
          counter: this.state.counter -1
        }
      );
    }
    
    handleChange = (e) => {
      console.log('handle change called');
      this.setState({name: e.target.value});
    }

    render() {
      const {priority, name} = this.state;
      return (
      <div> 
        <label> {priority} </label>

        <input value={name} onChange={this.handleChange}/>
        <CounterInitialValue props={{
          priority: this.state.priority,
          inc: this.inc
          }}></CounterInitialValue>
      </div>);
    }
  }

export default ToDoItem;  