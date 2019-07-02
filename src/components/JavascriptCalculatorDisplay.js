import PropTypes from 'prop-types';
import React from 'react';

const JavascriptCalculatorDisplay = (props) => {
	const { id, display } = props;
	return (
        <div id={id} className={id + " d-flex align-items-center justify-content-end bg-white text-truncate p-3"}>
			{display}
		</div>
    );
};

JavascriptCalculatorDisplay.propTypes = {
	id: PropTypes.string,
	display: PropTypes.string
}

export default JavascriptCalculatorDisplay;