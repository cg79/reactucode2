import React from 'react';

class CounterInitialValue extends React.Component {

    constructor(props) {
      debugger;
      super();
      this.state = {
        counter: props.props.priority
      };
    }

    componentWillReceiveProps(props) {
      debugger;
      this.setState(
        {
          counter: props.props.priority
        }
      );
    }

    inc = () => {
     const {counter} = this.state;
      this.props.props.inc(counter +1);
    }

    dec = () => {
      debugger;
      this.setState(
        {
          counter: this.state.counter -1
        }
      );
    }
    
    render() {
      return (
      <div>
        <button 
        onClick={this.dec}
        >-</button>

        <input type="text" value={this.state.counter} ></input>

        <button  onClick={this.inc}>+</button>
      </div>);
    }
  }

export default CounterInitialValue;  