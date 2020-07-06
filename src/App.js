import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: 'pepito',
            author: 'juanito',

        }
    }
    render(){
        return (
        <div className="App">
            {this.state.quote}
            {this.state.author}
        </div>
        );
    }
}

export default App;
