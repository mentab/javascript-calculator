import React from 'react';

const Number = (props) => {
	const id = props.id;
	const value = props.value;
	const number = props.number;
    return (
        <button onClick={number} id={id} class={id}>
			{value}
		</button>
    );
};

export default Number;