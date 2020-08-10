import React from "react";

class Show extends React.Component {
  render() {
    return (
      <div>
        {this.props.taskArray.map((task) => {
          return (
            <div>
              <h1 key={task.taskId}>
                {task.value},{task.taskId}
              </h1>
              <button onClick={() => this.props.setUpEditTodo(task.taskId)}>
                Edit
              </button>
              <button onClick={() => this.props.deleteTodo(task.taskId)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Show;
