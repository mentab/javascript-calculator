import React from 'react';

const Clear = (props) => {
	const id = props.id;
	const value = props.value;
	const clear = props.clear;
    return (
        <button id={id} class={id} onClick={clear}>
			{value}
		</button>
    );
};

export default Clear;