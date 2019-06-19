import React from 'react';
import { Button } from 'reactstrap';

const Operator = (props) => {
	const id = props.id;
	const value = props.value;
	const operator = props.operator;
    return (
        <Button id={id} className={id} onClick={operator} color="warning">
			{value}
		</Button>
    );
};

export default Operator;