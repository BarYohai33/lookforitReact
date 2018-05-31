import React, { Component } from "react";
import './index.css';
import { Link } from "react-router-dom";
import  Input from './components/input/input.component';
import  Button from './components/button/button.component';
import ArrowBack from './components/arrowback/arrowback.component';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="Login">
       <Link to="/"><ArrowBack/></Link>
        <div id="containerButtons">
              <label className="button-active-login">CONNEXION</label>
              <Link to="/signup" className="button-inactive">INSCRIPTION</Link> 
        </div>
        <Input 
        placeholder="E-mail"/>
        <Input 
        placeholder="Mot de passe"/>
        <div id="containerForgot">
        <a href="#" className="forgotPassword"> MOT DE PASSE OUBLIE</a>
        </div>
        <div id="containerCheckbox">
          <input type="checkbox" className="input-checkbox"/>
          <span className="label-stay-connect">Rester connecter</span>
        </div>
        <div style={{ marginTop:'96px'}}>
        <Link to="/home">
          <Button value="Continue" type="button"/>
        </Link>
        </div>

      </div>
    );
  }
}