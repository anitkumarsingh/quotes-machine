import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
     quote:'',
     author: ' ',
     colors:[
       '#FF00FF','#EE82EE','#9932CC','#8A2BE2','#FF69B4','#FFA500','#FF6347','#7CFC00','#AFEEEE',
       '#B0E0E6','#ADD8E6','#87CEFA','#87CEEB','#00BFFF','#8B008B'
     ],
     twitterBoxColor:[
      '#B0E0E6','#ADD8E6','#87CEFA','#87CEEB','#00BFFF','#8B008B','#FF00FF','#EE82EE','#9932CC','#8A2BE2','#FF69B4','#FFA500','#FF6347','#7CFC00','#AFEEEE'
     ],
     nextQuoteBoxColor:[
      '#B0E0E6','#ADD8E6','#87CEFA','#87CEEB','#00BFFF','#8B008B','#FF00FF','#EE82EE','#9932CC','#8A2BE2','#FF69B4','#FFA500','#FF6347','#7CFC00','#AFEEEE'
     ],
     selectedColor: '',
     twitterSelectedColor: '',
     nextSelectedQuoteColor:''
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
      this.twitterBoxColorHandler();
      this.nextQuoteBoxColorHandler();
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
  let colorItem  = this.state.colors[Math.floor(Math.random()*this.state.colors.length)];
  this.setState({
    selectedColor:colorItem
  })
  }
  twitterBoxColorHandler = ()=>{
    let colorItemTwitter  = this.state.twitterBoxColor[Math.floor(Math.random()*this.state.twitterBoxColor.length)];
    this.setState({
      twitterSelectedColor:colorItemTwitter
    })
  }
  nextQuoteBoxColorHandler = () =>{
    let colorNextQuoteColor  = this.state.nextQuoteBoxColor[Math.floor(Math.random()*this.state.nextQuoteBoxColor.length)];
    this.setState({
      nextSelectedQuoteColor:colorNextQuoteColor
    })
  }
  
  render() {
    console.log(this.state.quote);
    return (
      <div className="App" id="quote-box" style={{background:this.state.selectedColor}}>
       <Particles className="Particle"
                  params={{
                        particles: {
                            number:{
                                value:30,
                                density:{
                                    enable:true,
                                    value_area:150
                                }
                            }
                        }
                    }}
                />
        
       <p id="text">{this.state.quote}</p>
       <p id="author">- {this.state.author}</p>
       <div>
          <a style={{background:this.state.twitterSelectedColor}} 
            id="tweet-quote" 
            href="twitter.com/intent/tweet" 
            target="_blank" 
            onClick={()=>this.twitterHandler(this.state.quote,this.state.author)}>
            <i class="fa fa-twitter"/> Twitter</a>
       </div>
       <button  style ={{background:this.state.nextSelectedQuoteColor}}id="new-quote" onClick={this.nextQuoteHandler}>New Quotes</button>
      </div>
     
    );
  }
}

export default App;
