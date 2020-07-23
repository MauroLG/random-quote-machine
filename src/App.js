import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const arrQuotes = [
    ['"My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time."', 'Steve Jobs'],
    ['"The Internet is becoming the town square for the global village of tomorrow."', 'Bill Gates'],
    ['"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."', 'Linus Torvalds'],
    ['"The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks."', 'Mark Zuckerberg'],
    ['"The most technologically efficient machine that man has ever invented is the book."', 'Northrop Frye'],
    ['"Just because something doesn’t do what you planned it to do doesn’t mean it’s useless."', 'Thomas Edison'],
    ['"The human spirit must prevail over technology."', 'Albert Einstein'],
    ['"It’s supposed to be automatic, but actually you have to push this button."', 'John Brunner']
]

const arrColors = [
    ["#87CC95", "#91DBA0"],
    ["#8ABFB7","#9DDBD2"],
    ["#9197B8","#ACB3D9"],
    ["#A98ABA","#C7A1DA"],
    ["#BA7B8F","#DA90A7"],
    ["#BA8F7D","#DAA892"],
    ["#BFAC80","#DAC592"],
    ["#B4C482","#C8DB91"],
]

let randomNum;
let lastRandomNum;

//Obtengo un número aleatorio y lo vuelvo a generar si es el mismo que el último generado
function getRandomNum () {
    do {
        randomNum = Math.floor(Math.random() * arrQuotes.length);
    } while (randomNum === lastRandomNum);
    lastRandomNum = randomNum;
    return randomNum;
} 


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: '',
            bgColor: 'white',
            qtColor: 'white',
            fntColor:'white',
            firstQuote: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const rNum = getRandomNum();
        this.setState({
            quote: arrQuotes[rNum][0],
            author: arrQuotes[rNum][1],
            bgColor: arrColors[rNum][0],
            qtColor: arrColors[rNum][1],
            firstQuote: false,
        });
    }

    render(){
        const qtStyle = {
            color: this.state.qtColor,
            boxShadow: '4px 4px 15px 4px #000',
            backgroundColor: '#000' 
        }

        const cStyleBg = {
            backgroundImage: 'radial-gradient(circle, '+this.state.bgColor+','+this.state.qtColor+', black)',
            width: '100%',
            height: '100%'
        }

        const firstQuote = this.state.firstQuote;

        if (firstQuote) {
            return (
                <div className="Container" style={cStyleBg}>
                    <div id="quote-box" className="App">
                        <button id="new-quote" onClick={this.handleClick} style={{backgroundColor: this.state.qtColor, height: "4em", fontSize: "20px"}}>TAKE YOUR FIRST QUOTE!</button>
                    </div>
                </div>
            );            
        } 
        else {
            return (
                <div className="Container" style={cStyleBg}>
                    <div id="quote-box" className="App" style={qtStyle}>
                        <h2 id="text" className="quote"><FontAwesomeIcon icon={faQuoteLeft} />  {this.state.quote}</h2>
                        <h1 id="author" className="author">~ {this.state.author}</h1>
                        <a id="tweet-quote" style={{color: this.state.qtColor}} href={'https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&text='+this.state.quote+' ~' + this.state.author}><FontAwesomeIcon icon={faTwitter} /></a>
                        <button id="new-quote" onClick={this.handleClick} style={{backgroundColor: this.state.qtColor}}>NEW QUOTE!</button>
                    </div>
                </div>
             );
        }
    }
}

export default App;
