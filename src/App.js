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
    ["#A7AED1", "#6C7DD9"],
    ["#877C9E","#8C68D9"],
    ["#D199A6","#D95D7A"],
    ["#9E7565","#D9724A"],
    ["#9E8C6F","#D9A757"],
    ["#9E9A70","#D9CE59"],
    ["#8DA375","#9CD95B"],
    ["#95D1AB","#59D988"],
]

const docBody = document.querySelector('body');

//const randomNum = Math.floor(Math.random() * arrQuotes.length);

function getRandomNum () {
    return Math.floor(Math.random() * arrQuotes.length);
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
        const randomNum = getRandomNum();
        this.setState({
            quote: arrQuotes[randomNum][0],
            author: arrQuotes[randomNum][1],
            bgcolor: arrColors[randomNum][0],
            qtcolor: arrColors[randomNum][1]
        })
    }

    render(){
        const cntstyle = {
            backgroundColor: this.state.bgcolor,
            width: '100%',
            height: '100%'
        }
        return (
        <div className="Container" style={cntstyle}>
            <div className="App" style={{backgroundColor: this.state.qtcolor}}>
                <h2 className="quote">{this.state.quote}</h2>
                <h1 className="author">{this.state.author}</h1>
                <button id="newQuote" onClick={this.handleClick}>NEW QUOTE!</button>
            </div>
        </div>
        );
    }
}

export default App;
