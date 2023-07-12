import React from "react";
import "./todoliststyle.css";
import StatusTask from "../StatusTask/StatusTask";

class Todolist extends React.Component {
  state = {
    task: "",
    list: [],
    changeimg: false,
  };
  handleChange = (e) => {
    this.setState((state) => ({ task: (state.task = e.target.value) }));
  };
  handleClick = () => {
    this.setState((state) => ({ task: state.list.push(state.task) }));
    this.setState((state) => ({ task: (state.task = "") }));
  };
  deleteLastTask = () => {
    this.setState((state) => ({ task: state.list.pop() }));
    this.setState((state) => ({ task: (state.task = "") }));
  };

  renderlist = (array) => {
    let count = 0;
    const list = array.map((elem) => {
      count++;
      return <StatusTask key={count} elem={elem} />;
    });
    return list;
  };
  render() {
    return (
      <div>
        {this.renderlist(this.state.list)}
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="reset" onClick={this.handleClick}>
          Add new task
        </button>
        <button type="reset" onClick={this.deleteLastTask}>
          Delete last task
        </button>
      </div>
    );
  }
}
export default Todolist;
