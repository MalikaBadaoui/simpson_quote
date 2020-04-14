import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuotes from './components/DisplayQuotes.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null 
    };
    this.fetchquotesJSON = this.fetchquotesJSON.bind(this); 
  }
  componentDidMount() {
    this.fetchquotesJSON();
  }

  fetchquotesJSON() {   
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes') 
      .then(response => response.data)  
      .then(data => {       
        this.setState({
          quotes: data[0],   
        });
    });
  }
  
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.fetchquotesJSON}>Get quote</button>
        {this.state.quotes ? <DisplayQuotes quotes={this.state.quotes} />:<p> <img src = "https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt =""/> </p>}
      </div>
    );
  }
}

export default App;

