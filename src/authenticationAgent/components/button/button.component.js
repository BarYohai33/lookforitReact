// React
import React from 'react';

// Style
import Style from './style';

const Button = props => (
	<div style={Style.containerButton}>
        <input style={Style.buttonContinue} type={props.type} value={props.value}></input>
    </div>
	)

export default Button;