import React, { Component } from "react";
import './index.css';
import { Link } from "react-router-dom";
import  Input from './components/input/input.component';
import  Button from './components/button/button.component';
import ArrowBack from './components/arrowback/arrowback.component';


export default class Signup2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prenom: "",
      nom: "",
      telephone: "",
      birthday: "",
    };
  }
  render() {
    return (
    <div className="Signup2">
      <Link to="/signup"><ArrowBack/></Link>
        <div id="containerButtons">
            <Link to="/login" className="button-inactive">CONNEXION</Link>
            <label className="button-active-signup">INSCRIPTION</label> 
        </div>
        <Input 
        placeholder="Prénom"
        /> 
        <Input
        placeholder="Nom"/> 
        <Input
        placeholder="Téléphone"/> 
        <Input
        placeholder="Date de naissance"/> 
        <div style={{ marginTop:'35px'}}>
        <Button value="Continue" type="button"/>
        </div>

    </div>
    );
  }
}
