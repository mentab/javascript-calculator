import React, { Component } from 'react';
import Display from './Display';
import Number from './Number';
import Operator from './Operator';
import Decimal from './Decimal';
import Clear from './Clear';

class JavascriptCalculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display: '0'
		}
		this.handleNumber = this.handleNumber.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
		this.handleDecimal = this.handleDecimal.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleNumber(event) {
		if (this.state.display !== '0' || event.target.innerText !== '0') {
			this.setState({
				display: this.state.display + event.target.innerText
			});
		}
	}

	handleOperator(event) {
		this.setState({
			display: this.state.display + event.target.innerText
		});
	}

	handleDecimal(event) {
		this.setState({
			display: this.state.display + event.target.innerText
		});
	}

	handleClear() {
		this.setState({
			display: '0'
		});
	}

	render() {
		const display = this.state.display;
		const number = this.handleNumber;
		const operator = this.handleOperator;
		const decimal = this.handleDecimal;
		const clear = this.handleClear;
		return (
			<div>
				<Display display={display}/>
				<Number id="zero" value="0" number={number}/>
				<Number id="one" value="1" number={number}/>
				<Number id="two" value="2" number={number}/>
				<Number id="three" value="3" number={number}/>
				<Number id="four" value="4" number={number}/>
				<Number id="five" value="5" number={number}/>
				<Number id="six" value="6" number={number}/>
				<Number id="seven" value="7" number={number}/>
				<Number id="eight" value="8" number={number}/>
				<Number id="nine" value="9" number={number}/>
				<Operator id="add" value="+" operator={operator}/>
				<Operator id="substract" value="-" operator={operator}/>
				<Operator id="multiply" value="*" operator={operator}/>
				<Operator id="divide" value="/" operator={operator}/>
				<Decimal id="decimal" value="." decimal={decimal}/>
				<Clear id="clear" value="C" clear={clear}/>
			</div>
		);
	}
}

export default JavascriptCalculator;
