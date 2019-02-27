import React, { Component } from 'react';
import '../styles/App.css';
import TodoAppContainer from '../containers/TodoAppContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Up and running!
            <TodoAppContainer />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
