import React from 'react';
import ToDoItem from './ToDoItem';
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

  saveTodo = (event) => {
    event.preventDefault();
    debugger;
    if (this.editID) {
      //const editIndex = this.state.list.findIndex(el => el.id === this.editID);
      // this.state.list[editIndex].name = this.state.name;
      this.editID.name = this.state.name;
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
  handleCheck = (item) => {
    item.selected = !item.selected;
  }
  deletedSelected = () => {
    const items = this.state.list.filter(el => !el.selected);
    this.setState({
      list: items
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.saveTodo}>
          <input type="text"
            value={this.state.name}
            onChange={this.onChange} >
          </input>
          <button onClick={this.saveTodo}>
            SAVE
          </button>
        </form>

        <ul>
          {this.state.list.map((item) => {
            return <li key={item.name}>
              <ToDoItem
                item={item}
                handleCheck={this.handleCheck}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              ></ToDoItem>
            </li>;
          })}
        </ul>
        <button onClick={() => this.deletedSelected()}>
          Delete selected
              </button>
      </div>);
  }
}

export default ToDoAdd;  