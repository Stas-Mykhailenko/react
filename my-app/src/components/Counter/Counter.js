import React from "react";
import smilefirst from "../../assets/smile1.png";
import smilesecond from "../../assets/smile2.png";
import smilethird from "../../assets/smile3.png";
class Counter extends React.Component {
  state = {
    firstsmile: 0,
    secondsmile: 0,
    thirdsmile: 0,
    isShow: false,
  };
  firstsmile = () => {
    this.setState((state) => ({ firstsmile: state.firstsmile + 1 }));
  };
  secondsmile = () => {
    this.setState((state) => ({ secondsmile: state.secondsmile + 1 }));
  };
  thirdsmile = () => {
    this.setState((state) => ({ thirdsmile: state.thirdsmile + 1 }));
  };
  handleShow = () => {
    this.setState((state) => ({ isShow: !state.isShow }));
  };

  render() {
    return (
      <div>
        <h2>How do you feel when you study react? click on smiley</h2>

        <img
          src={smilefirst}
          alt=""
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={this.firstsmile}
        />
        <p>{this.state.isShow && this.state.firstsmile}</p>
        <img
          src={smilesecond}
          alt=""
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={this.secondsmile}
        />
        <p>{this.state.isShow && this.state.secondsmile}</p>
        <img
          src={smilethird}
          alt=""
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={this.thirdsmile}
        />
        <p>{this.state.isShow && this.state.thirdsmile}</p>
        <button onClick={this.handleShow}>Show results</button>
      </div>
    );
  }
}

export default Counter;
