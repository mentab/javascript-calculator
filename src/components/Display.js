import React from 'react';

const Display = (props) => {
	const id = props.id;
	const display = props.display;
	const currentNumber = props.currentNumber;
	return (
		<div>
			<div>
				{currentNumber}
			</div>
        	<div id={id}>
				{display}
			</div>
		</div>
    );
};

export default Display;