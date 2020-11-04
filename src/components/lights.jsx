import React from 'react';

class LightSwitch extends React.Component {
  constructor() {
    super();

    // Initial state is defined
    this.state = {
      toggled: false
    };
  }

  // when handleClick is called, setState will update the state so that toggle is reversed
  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default LightSwitch;
