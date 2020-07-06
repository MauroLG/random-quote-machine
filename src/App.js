import React from 'react';
import './App.css';

const arrQuotes = [
    ['quote1', 'author1'],
    ['quote2', 'author2'],
    ['quote3', 'author3']
]

//const randomNum = Math.floor(Math.random() * arrQuotes.length);

function getRandomNum () {
    return Math.floor(Math.random() * arrQuotes.length);
}


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: 'pepito',
            author: 'juanito',

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const randomNum = getRandomNum();
        this.setState({
            quote: arrQuotes[randomNum][0],
            author: arrQuotes[randomNum][1],
        })
    }

    render(){
        return (
        <div className="App">
            <h2>{this.state.quote}</h2>
            <h1>{this.state.author}</h1>
            <button onClick={this.handleClick}>Haceme click!</button>
        </div>
        );
    }
}

export default App;
