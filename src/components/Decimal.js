import React from 'react';
import { Button } from 'reactstrap';

const Decimal = (props) => {
	const id = props.id;
	const value = props.value;
	const decimal = props.decimal;
    return (
        <Button id={id} className={id} onClick={decimal} color="secondary">
			{value}
		</Button>
    );
};

export default Decimal;