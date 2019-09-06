import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = { count: 0 };
  add = () => {
    console.log("add");
    this.setState(cur => ({ count: cur.count + 1 }));
  };

  minus = () => {
    console.log("minus");
    this.setState(cur => ({ count: cur.count - 1 }));
  };

  componentDidMount() {
    console.log("처음 랜더링 될때");
  }

  componentDidUpdate() {
    console.log("업데이트 될때 호출됨");
  }

  componentWillUnmount() {
    console.log("안녕~");
  }
  render() {
    console.log("render() 호출");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
