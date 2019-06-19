import React from 'react';
import { Button } from 'reactstrap';

const Number = (props) => {
	const id = props.id;
	const value = props.value;
	const number = props.number;
    return (
        <Button id={id} className={id} onClick={number} color="primary">
			{value}
		</Button>
    );
};

export default Number;