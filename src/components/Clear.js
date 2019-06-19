import React from 'react';
import { Button } from 'reactstrap';

const Clear = (props) => {
	const id = props.id;
	const value = props.value;
	const clear = props.clear;
    return (
        <Button id={id} className={id} onClick={clear} color="success">
			{value}
		</Button>
    );
};

export default Clear;