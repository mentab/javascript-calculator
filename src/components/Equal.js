import React from 'react';

const Equal = (props) => {
	const id = props.id;
	const value = props.value;
	const equal = props.equal;
    return (
        <button id={id} class={id} onClick={equal}>
			{value}
		</button>
    );
};

export default Equal;