import React from 'react';

class ToDoAdd extends React.Component {

  constructor () {
    super();
    this.state = {
      name: '',
      list: []
    };
  }

  editID = null;

  guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  saveTodo = () => {
    debugger;
    if (this.editID) {
      //const editIndex = this.state.list.findIndex(el => el.id === this.editID);
     // this.state.list[editIndex].name = this.state.name;
     this.editID.name=this.state.name;
      this.setState({
        list: [...this.state.list],
        name: ''
      });
      this.editID = null;
      return;
    }
    const items = this.state.list.concat({
      name: this.state.name,
      id: this.guid()
    });
    this.setState({
      list: items,
      name: ''
    })
    localStorage.setItem('xxx', JSON.stringify(this.state));
  }

  editTodo = (item) => {
    this.setState({
      name: item.name
    });
    this.editID = item;
    // debugger;
    // const items = this.state.list.filter(el => el.id !== id);
    // this.setState({
    //   list: items
    // })
    // localStorage.setItem('xxx', JSON.stringify(this.state));
  }

  deleteTodo = (id) => {
    debugger;
    const items = this.state.list.filter(el => el.id !== id);
    this.setState({
      list: items
    })
    localStorage.setItem('xxx', JSON.stringify(this.state));
  }

  onChange = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
  
    return (
      <div>
        <input type="text"
          value={this.state.name}
          onChange={this.onChange} >
        </input>

        <button onClick={this.saveTodo}>
          SAVE
        </button>

        <ul>
          {this.state.list.map((item) => {
            return <li key={item.name}>
              {item.name}
              <button onClick={() => this.deleteTodo(item.id)}>
                Delete
              </button>
              <button onClick={() => this.editTodo(item)}>
                Edit
              </button>
            </li>;
          })}
        </ul>
      </div>);
  }
}

export default ToDoAdd;  