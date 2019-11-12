import React, {Component} from 'react';
import PropTypes from "prop-types";

class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("push add button");
    this.setState(current=>({
      count: current.count + 1
    }));
  }

  minus = () => {
    console.log("push minus button");  
    this.setState(current=>({
      count: current.count - 1 < 0
        ? 0
        : current.count - 1
    }));
  }

  render(){
    return (
    <div>
      <h1>Number : {this.state.count}</h1>
      <button onClick={this.add}> + </button>
      <button onClick={this.minus}> - </button>
    </div>
    );
  }
}

export default App;
