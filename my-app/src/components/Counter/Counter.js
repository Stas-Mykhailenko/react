import React from "react";
import smilefirst from "../../assets/smile1.png";
import smilesecond from "../../assets/smile2.png";
import smilethird from "../../assets/smile3.png";
class Counter extends React.Component {
	
  state = {
    firstsmile: 0,
    secondsmile: 0,
    thirdsmile: 0,
    results: "hhhh",
  };
  firstsmile = () => {
   this.setState((state)=>({firstsmile: state.firstsmile +1}))
	
  };
  secondsmile = () => {};
  thirdsmile = () => {};


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
		  <p>{this.state.firstsmile}</p>
        <img
          src={smilesecond}
          alt=""
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={this.secondsmile}
        />
		   <p></p>
        <img
          src={smilethird}
          alt=""
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={this.thirdsmile}
        />
		   <p></p>
        <button onClick={this.handleClick}>Show results</button>
      </div>
    );
  }
}

export default Counter;
