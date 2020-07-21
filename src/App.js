import React from 'react';
import './App.css';
import {Helmet} from "react-helmet"

const arrQuotes = [
    ['My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.', 'Steve Jobs'],
    ['The Internet is becoming the town square for the global village of tomorrow.', 'Bill Gates'],
    ['Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.', 'Linus Torvalds'],
    ['The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.', 'Mark Zuckerberg'],
    ['The most technologically efficient machine that man has ever invented is the book.', 'Northrop Frye'],
    ['Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.', 'Thomas Edison'],
    ['The human spirit must prevail over technology.', 'Albert Einstein'],
    ['It’s supposed to be automatic, but actually you have to push this button.', 'John Brunner']
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

const docBody = document.querySelector('body');

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
            bgcolor: 'white',
            qtcolor: 'white',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const rNum = getRandomNum();
        this.setState({
            quote: arrQuotes[rNum][0],
            author: arrQuotes[rNum][1],
            bgcolor: arrColors[rNum][0],
            qtcolor: arrColors[rNum][1],
        })
    }

    render(){
        const qtStyleBg = {
            backgroundColor: this.state.qtcolor,
        }
        const qtStyleSh = {
            boxShadow: '7px 7px 50px 1px' + this.state.qtcolor,
        }
        const bgStyle = {
            backgroundImage: 'radial-gradient(circle, '+this.state.bgcolor+','+this.state.qtcolor+')',
            width: '100%',
            height: '100%'
        }
        return (
            <div className="Container" style={bgStyle}>
                <div className="App" style={{...qtStyleBg, ...qtStyleSh}}>
                    <h2 className="quote">{this.state.quote}</h2>
                    <h1 className="author">{this.state.author}</h1>
                    <button id="newQuote" onClick={this.handleClick}>NEW QUOTE!</button>
                </div>
            </div>
        );
    }
}

export default App;
