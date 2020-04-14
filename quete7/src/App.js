import React, { Component } from 'react';
import './App.css';
import SimpsonQuote from './components/Simpsons';
import Axios from 'axios';

class App extends Component {

  state = {
    repos : null
  }

getSimpsons = (e) => {
  e.preventDefault();
  Axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
  .then((res) => {
    
    const repos = res.request[2];
    console.log(repos)
  })
}
render() {
  return (
    <div >

      <SimpsonQuote getSimpsons={this.getSimpsons} />
    
    </div>
  );
}
  
}

export default App;
