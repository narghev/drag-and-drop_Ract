import React, { Component } from 'react';
import Fields from './components/fields';

class App extends Component {
    constructor(){
	super();
	this.state = {};
    }

    componentWillMount(){
	const newItems = [[],[],[],[],[],[],[]];
	for (let i = 0; i < newItems.length; i++){
	    const l = Math.floor(Math.random()*6);
	    for (let j = 0; j < l; j++){
		const r = Math.floor(Math.random()*255);
		const g = Math.floor(Math.random()*255);
		const b = Math.floor(Math.random()*255);
		const color = `rgb(${r},${g},${b})`;
		newItems[i].push(color);
	    }
	}
	this.setState({items: newItems});
    }

    changeColumn = (obj, newColumn) => {
	const {x,y} = obj;
	let itemsSnap = this.state.items;
	const movedObj = itemsSnap[x][y];
	itemsSnap[newColumn].push(movedObj);
	delete itemsSnap[x][y];
	itemsSnap = itemsSnap.filter((elem)=>{
	    return elem !== undefined;
	});
	this.setState({items: itemsSnap});
    }
    render() {
    return (
	<div className="App">
	  <Fields items={this.state.items} changeColumn={this.changeColumn} />
	</div>
    );
  }
}

export default App;
