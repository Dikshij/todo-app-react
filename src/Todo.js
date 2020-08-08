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
      taskArray: [...this.state.taskArray, { value: this.state.value }], //appending the array
      value: ""
    });
  };

  enterTask = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    console.log(this.state.taskArray);
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
        <Show taskArray={this.state.taskArray} />
      </div>
    );
  }
}

export default Todo;
