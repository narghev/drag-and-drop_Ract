import React from 'react';
import Draggable from 'react-draggable';

export default
class Fields extends React.Component {
    constructor(props){
	super(props);
	this.state = {items: props.items};
    }
    onStop = (column, data, obj) => {
	const newColumn = column + Math.floor(data.lastX / 150);
	this.props.changeColumn(obj, newColumn);
    }
    makeContent = () => {
	const content = this.state.items.map((field, idx)=>{
	    const fieldContent = field.map((elem, id)=>{
		return(
		    <Draggable position={null}  key={id} grid={[150, 1]} onStop={(_, data)=>{
			  this.onStop(idx, data, {x: idx, y: id});
		      }}>
		      <div className='elem' style={{backgroundColor: elem}}></div>
		    </Draggable>
		);
	    });
	    return (
		<div key={idx} className="field">
		  { fieldContent }
		</div>
	    );
	});
	return content;
    }
    componentWillReceiveProps(nextProps){
	this.setState({items: nextProps.items});
    }
    render(){
	return(
	    <div className='fields'>
	      { this.makeContent() }
	    </div>
	);
    }
}
