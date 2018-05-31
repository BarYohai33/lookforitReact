import React, { Component } from "react";
import './index.css';
import { Link } from "react-router-dom";
import FilterBar from './components/filterbar/filterbar.component';
import Location from './components/location/location.component'


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
    <div className="containerHome">
    <div >
    <FilterBar/>
    <Location/>
    </div>
 
    </div>
    );
  }
}
