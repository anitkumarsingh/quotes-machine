import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
     quote:''
    }
  }
  
    componentDidMount(){
      fetch('https://talaikis.com/api/quotes/random/')
      .then(response => response.json())
      .then(data =>{
        this.setState({quote:data})
        }
      )
      .catch(err =>{
				console.log('Error occoured while fetching!', err);
			});
    }

  nextQuoteHandler = (e) =>{
    // e.preventDafault();
   this.componentDidMount();
  }
  twitterHandler = ()=>{
    console.log("clicked")
  }
  render() {
    console.log(this.state.quote);
    return (
      <div className="App" id="quote-box">
       <p id="text">{this.state.quote.quote}</p>
       <p id="author">{this.state.quote.author}</p>
       <code code="" style={{boxSizing:'inherit',marginBottom: '0px'}}onClick={this.twitterHandler}>Twitter</code>
       <button id="new-quote" onClick={this.nextQuoteHandler}>New Quotes</button>
      </div>
    );
  }
}

export default App;
