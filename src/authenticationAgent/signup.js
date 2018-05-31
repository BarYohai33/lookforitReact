import React, { Component } from "react";
import './index.css';
import { Link } from "react-router-dom";
import  Input from './components/input/input.component';
import  Button from './components/button/button.component';
import ArrowBack from './components/arrowback/arrowback.component';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password2: "",
    };
  }
  render() {
    return (
    <div className="Signup">
      <Link to="/login"><ArrowBack/></Link>
        <div id="containerButtons">
            <Link to="/login" className="button-inactive">CONNEXION</Link>
            <label className="button-active-signup">INSCRIPTION</label> 
        </div>
        <Input 
        placeholder="E-mail"
        /> 
        <Input
        placeholder="Mot de passe"/> 
        <Input
        placeholder="Confirmation"/> 
        <div style={{ marginTop:'115px'}}>
          <Link to="/signup2">
            <Button value="Continue" type="button"/>
          </Link>
        </div>
    </div>
    );
  }
}