import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';

const JavascriptCalculatorButton = (props) => {
	const { id, value, click, color } = props;
    return (
        <Button id={id} className={id} onClick={click} color={color}>
			{value}
		</Button>
    );
};

JavascriptCalculatorButton.propTypes = {
	id: PropTypes.string,
	value: PropTypes.string,
	click: PropTypes.func,
	color: PropTypes.string
}

export default JavascriptCalculatorButton;