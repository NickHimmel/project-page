import React, { Component } from 'react';
import Button from './Button.js'

class Main extends Component {

  handleClick = () => {
    const cid = "N00041162";
    const token = process.env.REACT_APP_OPEN_SECRETS_API_KEY;
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
        <h2>Now with a token</h2>
        <p>This is an app For testing</p>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Main;
