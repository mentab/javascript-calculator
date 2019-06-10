import React, { Component } from 'react';
import Display from './Display';
import Number from './Number';

class JavascriptCalculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log(event.target);
	}

	render() {
		const display = this.state.display;
		const click = this.handleClick;
		return (
			<div>
				<Display display={display}/>
				<Number id="zero" value="0" click={click}/>
				<Number id="one" value="1" click={click}/>
			</div>
		);
	}
}

export default JavascriptCalculator;
