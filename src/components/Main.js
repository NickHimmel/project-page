import React, { Component } from 'react';
import Button from './Button.js'

class Main extends Component {

  handleClick = () => {
    console.log('Clicked!');
  }

  render() {
    return (
      <div>
        <p>This is an app For testing</p>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Main;
