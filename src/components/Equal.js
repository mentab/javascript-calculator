import React from 'react';
import { Button } from 'reactstrap';

const Equal = (props) => {
	const id = props.id;
	const value = props.value;
	const equal = props.equal;
    return (
        <Button id={id} className={id} onClick={equal} color="info">
			{value}
		</Button>
    );
};

export default Equal;