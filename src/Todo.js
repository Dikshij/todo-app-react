import React from "react";
import Show from "./Show";

class Todo extends React.Component {
  state = {
    value: "",
    save: false,
    taskId: 0,
    taskArray: []
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
    const newTodos = this.state.taskArray.filter((value) => value.id !== id);
    this.setState({
      taskArray: newTodos
    });
  };

  render() {
    console.log(this.state.taskArray.taskId);
    return (
      <div>
        <form onSubmit={this.saveValue}>
          <input
            type="text"
            placeholder="What's on your mind today"
            onChange={this.enterTask}
            value={this.state.value} // Controlling the value
          ></input>
          <br />
          <button type="submit">Click Me</button>
        </form>
        <Show taskArray={this.state.taskArray} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Todo;
