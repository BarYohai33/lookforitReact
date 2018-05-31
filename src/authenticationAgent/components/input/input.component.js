// React
import React from 'react';

// Style
import Style from './style';

const Input = props => (
	<div style={Style.containerInput}>
		<input style={Style.inputStyle} placeholder={props.placeholder}/>
	</div>
	);

export default Input;