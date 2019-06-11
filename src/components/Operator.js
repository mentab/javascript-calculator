import React from 'react';

const Operator = (props) => {
	const id = props.id;
	const value = props.value;
	const operator = props.operator;
    return (
        <button id={id} onClick={operator}>
			{value}
		</button>
    );
};

export default Operator;