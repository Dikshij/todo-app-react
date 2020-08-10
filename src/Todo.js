import React from "react";
import Show from "./Show";

class Todo extends React.Component {
  state = {
    value: "",
    save: false,
    taskId: 0,
    taskArray: [],
    isEditing: false,
    editId: ""
  };

  saveValue = (event) => {
    event.preventDefault();
    this.setState({
      save: true,

      taskArray: [
        ...this.state.taskArray,
        { value: this.state.value, taskId: this.state.taskArray.length + 1 }
      ], //appending the array
      value: ""
    });
  };

  enterTask = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  deleteTodo = (id) => {
    const newTodos = this.state.taskArray.filter((task) => task.taskId !== id);
    this.setState({
      taskArray: newTodos
    });
  };

  setUpEditTodo = (id) => {
    const todo = this.state.taskArray.find((task) => task.taskId === id);
    this.setState({
      isEditing: true,
      editId: id,
      value: todo.value
    });
  };

  editTodo = (event) => {
    event.preventDefault();
    const tempArray = this.state.taskArray;
    const index = this.state.taskArray.findIndex(
      (task) => task.taskId === this.state.editId
    );

    tempArray[index] = { ...tempArray[index], value: this.state.value };

    this.setState({
      taskArray: tempArray,
      isEditing: false,
      value: ""
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.state.isEditing ? this.editTodo : this.saveValue}>
          <input
            type="text"
            placeholder="What's on your mind today"
            onChange={this.enterTask}
            value={this.state.value} // Controlling the value
          ></input>
          <br />
          <button type="submit">
            {this.state.isEditing ? " Edit item" : "Add Item"}
          </button>
        </form>
        <Show
          taskArray={this.state.taskArray}
          deleteTodo={this.deleteTodo}
          setUpEditTodo={this.setUpEditTodo}
        />
      </div>
    );
  }
}

export default Todo;
