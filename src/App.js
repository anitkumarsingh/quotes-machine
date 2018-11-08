import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
     quote:'',
     author: ' ',
     colors:[
       '#FF00FF','#EE82EE','#9932CC','#8A2BE2','#FF69B4','#FFA500','#FF6347','#7CFC00','#AFEEEE'
     ],
     selectedColor: ''
    }
  }
  
    componentDidMount(){
      fetch('https://talaikis.com/api/quotes/random/')
      .then(response => response.json())
      .then(data =>{
        this.setState({
          quote:data.quote,
          author:data.author
        })
       }
      )
      .catch(err =>{
				console.log('Error occoured while fetching!', err);
      });
      this.colorChangeHandler();
    }

  nextQuoteHandler = (e) =>{
    // e.preventDafault();
   this.componentDidMount();
  }
  twitterHandler = (text,author)=>{
    console.log(text);
    console.log(author);
  // var text = this.state.quote;
  // var author = this.state.author;
    window.open('http://twitter.com/share?url='+encodeURIComponent()+'&text='+encodeURIComponent(text)+'&author='+encodeURIComponent(author), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

  }
  colorChangeHandler = ()=>{
  //  let color = Math.floor(Math.random()*this.state.colors.length);
  //  let Bg = document.getElementsByTagName('body');
  //  Bg.style.backgroundColor = this.state.colors[color]
  let colorItem  = this.state.colors[Math.floor(Math.random()*this.state.colors.length)];
  this.setState({
    selectedColor:colorItem
  })
   
  }
  render() {
    console.log(this.state.quote);
    return (
      <div className="App" id="quote-box" style={{backgroundColor:this.state.selectedColor}}>
       <p id="text">{this.state.quote}</p>
       <p id="author">{this.state.author}</p>
       <div style={{boxSizing:'inherit',marginBottom: '0px'}}>
         <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" onClick={()=>this.twitterHandler(this.state.quote,this.state.author)}>Twitter</a>
       </div>
       <button id="new-quote" onClick={this.nextQuoteHandler}>New Quotes</button>
      </div>
    );
  }
}

export default App;
