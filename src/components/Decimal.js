import React from 'react';

const Decimal = (props) => {
	const id = props.id;
	const value = props.value;
	const decimal = props.decimal;
    return (
        <button id={id} onClick={decimal}>
			{value}
		</button>
    );
};

export default Decimal;