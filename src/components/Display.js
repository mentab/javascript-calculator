import React from 'react';

const Display = (props) => {
	const id = props.id;
	const display = props.display;
	return (
		<div>
        	<div id={id} class={id}>
				{display}
			</div>
		</div>
    );
};

export default Display;