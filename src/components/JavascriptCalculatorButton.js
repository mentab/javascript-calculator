import React from 'react';
import { Button } from 'reactstrap';

const JavascriptCalculatorButton = (props) => {
	const id = props.id;
	const value = props.value;
	const click = props.click;
	const color = props.color;
    return (
        <Button id={id} className={id} onClick={click} color={color}>
			{value}
		</Button>
    );
};

export default JavascriptCalculatorButton;