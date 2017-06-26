import React, { Component } from 'react';
import Draggable from 'react-draggable';

class App extends Component {
  render() {
    return (
	<div className="App">
	  <Draggable>
            <div style={{backgroundColor: 'red', width: '200px', height: '400px'}}></div>
	  </Draggable>
      </div>
    );
  }
}

export default App;
