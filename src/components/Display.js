import React from 'react';

const Display = (props) => {
	const id = props.id;
	const display = props.display;
	return (
        <div id={id} className={id + " d-flex align-items-center justify-content-end bg-white p-3"}>
			{display}
		</div>
    );
};

export default Display;