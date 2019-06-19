import React, { Component } from 'react';
import JavascriptCalculatorDisplay from './JavascriptCalculatorDisplay';
import JavascriptCalculatorButton from './JavascriptCalculatorButton';
import './JavascriptCalculator.css';
import { Jumbotron } from 'reactstrap';

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
		this.handleEqual = this.handleEqual.bind(this);
	}

	handleNumber(event) {
		// number should not begin with multiple zeros
		if (this.state.display !== '0' || event.target.innerText !== '0') {
			this.setState({
				display: this.state.display + event.target.innerText
			});
		}
		// number should not start with zero
		if (this.state.display === '0') {
			this.setState({
				display: event.target.innerText
			});
		}
	}

	handleOperator(event) {
		// if 2 or more operators are entered consecutively, the operation performed should be the last operator entered
		if (['+', '/', '*', '-'].includes(this.state.display.charAt(this.state.display.length - 1))) {
			this.setState({
				display: this.state.display.slice(0, -1) + event.target.innerText
			});
		} else {
			this.setState({
				display: this.state.display + event.target.innerText
			});
		};
	}

	handleDecimal(event) {
		const lastNumber = this.state.display.split(/\+|-|\/|\*/).reverse()[0];
		// two "." in one number should not be accepted
		if (!lastNumber.includes('.')) {
			this.setState({
				display: this.state.display + event.target.innerText
			});
		}
	}

	handleClear() {
		this.setState({
			display: '0'
		});
	}

	handleEqual() {
		this.setState({
			display: eval(this.state.display).toString()
		});
	}

	render() {
		const display = this.state.display;
		const number = this.handleNumber;
		const operator = this.handleOperator;
		const decimal = this.handleDecimal;
		const clear = this.handleClear;
		const equal = this.handleEqual;
		return (
			<Jumbotron className="wrapper">
				<JavascriptCalculatorDisplay id="display" display={display} color="primary"/>
				<JavascriptCalculatorButton id="zero" value="0" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="one" value="1" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="two" value="2" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="three" value="3" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="four" value="4" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="five" value="5" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="six" value="6" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="seven" value="7" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="eight" value="8" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="nine" value="9" click={number} color="secondary"/>
				<JavascriptCalculatorButton id="add" value="+" click={operator} color="info"/>
				<JavascriptCalculatorButton id="subtract" value="-" click={operator} color="info"/>
				<JavascriptCalculatorButton id="multiply" value="*" click={operator} color="info"/>
				<JavascriptCalculatorButton id="divide" value="/" click={operator} color="info"/>
				<JavascriptCalculatorButton id="decimal" value="." click={decimal} color="success"/>
				<JavascriptCalculatorButton id="clear" value="C" click={clear} color="warning"/>
				<JavascriptCalculatorButton id="equals" value="=" click={equal}/>
			</Jumbotron>
		);
	}
}

export default JavascriptCalculator;
