import React, { Component }from 'react';
import Style from './style';
import Switch from "react-switch";
export default class filterBar extends Component {
	 constructor(props) {
    super(props);

    this.state = { checked: false };
    
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
    
	<div style={Style.filterBarStyle}>
		<span className="glyphicon glyphicon glyphicon-align-left" style={Style.glyphiconStyle}></span>
			<span style={{borderLeft:'1px solid #000',height:'20px',marginLeft:'10%'}}></span>
			<span style={Style.textStyle}>Invisible</span>
			<span style={Style.textStylee}>Filtre</span>
			<span className="glyphicon glyphicon glyphicon-align-left" style={Style.glyphiconStylee}></span>
			<Switch
			onChange={this.handleChange}
          	checked={this.state.checked}
		    onColor="#86d3ff"
		    onHandleColor="#2693e6"
		    handleDiameter={20}
		    uncheckedIcon={false}
		    checkedIcon={false}
		    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
		    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
		    height={15}
		    width={30}
		    className="react-switch"
		    id="material-switch"/>
	</div>
	)
	}
}