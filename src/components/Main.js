import React, { Component } from 'react';
import Button from './Button.js'

class Main extends Component {

  handleClick = () => {
    const cid = "N00041162";
    const token = "354e1dd0612b41cbe30b85c0b8323914";

    const url = `https://www.opensecrets.org/api/?method=candSector&cid=${cid}&output=json&apikey=${token}`

    fetch(url)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => {
        console.log('request failed', error);
    })
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
