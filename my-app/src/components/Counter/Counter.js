import React from "react";
import smilefirst from "../../assets/smile1.png";
import smilesecond from "../../assets/smile2.png";
import smilethird from "../../assets/smile3.png";
class Counter extends React.Component {
  state = {
    firstsmile: 0,
    secondsmile: 0,
    thirdsmile: 0,
    showFirstSmile: false,
    showSecondSmile: false,
    showThirdSmile: false,
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
    if (
      this.state.firstsmile > this.state.secondsmile ||
      this.state.firstsmile > this.state.thirdsmile
    ) {
      this.setState((state) => ({ showFirstSmile: !state.showFirstSmile }));
    }
    if (
      this.state.secondsmile > this.state.firstsmile ||
      this.state.secondsmile > this.state.thirdsmile
    ) {
      this.setState((state) => ({ showSecondSmile: !state.showSecondSmile }));
    }
    if (
      this.state.thirdsmile > this.state.firstsmile ||
      this.state.thirdsmile > this.state.secondsmile
    ) {
      this.setState((state) => ({ showThirdSmile: !state.showThirdSmile }));
    }
    if (
      this.state.firstsmile === this.state.secondsmile &&
      this.state.secondsmile === this.state.thirdsmile
    ) {
      this.setState((state) => ({
        showFirstSmile: !state.showFirstSmile,
        showSecondSmile: !state.showSecondSmile,
        showThirdSmile: !state.showThirdSmile,
      }));
    }
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
        <p>{this.state.showFirstSmile && this.state.firstsmile}</p>
        <img
          src={smilesecond}
          alt=""
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={this.secondsmile}
        />
        <p>{this.state.showSecondSmile && this.state.secondsmile}</p>
        <img
          src={smilethird}
          alt=""
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={this.thirdsmile}
        />
        <p>{this.state.showThirdSmile && this.state.thirdsmile}</p>
        <button onClick={this.handleShow}>Show results</button>
      </div>
    );
  }
}

export default Counter;
