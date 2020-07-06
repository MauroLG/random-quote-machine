import React from 'react';
import './App.css';

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
        this.setState({
            quote: 'Ahora soy una quote',
            author: 'Yo soy un author',
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
