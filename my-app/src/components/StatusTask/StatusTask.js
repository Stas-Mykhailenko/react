import React from "react";    

import done from "../../assets/done.png";
import nostamp from "../../assets/nostamp.png";

class StatusTask extends React.Component {
  state = {
    value: true,
  };
  changeStatus = () => {
    this.setState((state) => ({ value: !state.value }));
  };
  render() {
    return (
      <p
        onClick={this.changeStatus}
        style={{ padding: "2px", cursor: "pointer", width: "auto" }}
      >
        {this.props.elem}
        <img
          src={this.state.value ? nostamp : done}
          alt=""
          style={{
            marginleft: "5px",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
      </p>
    );
  }
}
export default StatusTask;
