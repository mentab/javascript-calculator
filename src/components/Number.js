import React from 'react';

const Number = (props) => {
	const id = props.id;
	const value = props.value;
	const click = props.click;
    return (
        <button onClick={click}>
			{id}
		</button>
    );
};

export default Number;