import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const Start = props => (
	<div id="choice">
	<div className="contain">
		<div className="buyerImage"/>
		<div className="blockText cornerRight"> 
			<p className="titleOnBlock">Acheteur</p>  
			<p className="textOnBlock"> Je souhaite être livrée </p>
		</div>
	</div>
	<Link to="./login" className="contain reverse disabledLinkStyle">
		<div className="shipperImage"/>
		<div className="blockText cornerLeft">
		<p className="titleOnBlock">Agent</p>
		<p className="textOnBlock">Je souhaite livrer</p>
		</div>
	</Link>
	</div>
);
export default Start;






