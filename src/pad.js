import React from "react";

class Pad extends React.Component {
  render() {
    return (
      <div className="pad" id={this.props.id} > {this.props.pad} </div>
    );
  }
}

export default Pad;
