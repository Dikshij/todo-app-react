import React from "react";

class Show extends React.Component {
  render() {
    return (
      <div>
        {this.props.taskArray.map((task, id) => {
          return <h1 key={id}>{task.value}</h1>;
        })}
      </div>
    );
  }
}

export default Show;
