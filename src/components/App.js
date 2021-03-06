import React, { Component } from 'react';
import '../styles/App.css';
import TodoAppContainer from '../containers/TodoAppContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Up and running!
            <TodoAppContainer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
