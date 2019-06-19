import React from 'react';

const JavascriptCalculatorDisplay = (props) => {
	const id = props.id;
	const display = props.display;
	return (
        <div id={id} className={id + " d-flex align-items-center justify-content-end bg-white text-truncate p-3"}>
			{display}
		</div>
    );
};

export default JavascriptCalculatorDisplay;