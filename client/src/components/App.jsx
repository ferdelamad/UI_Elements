import React, { Component } from 'react';
import Button01 from './Button01';
import Button02 from './Button02';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello world!</h1>
        <Button01>Button</Button01>
        <Button02>Button</Button02>
      </div>
    );
  }
}

export default App;
