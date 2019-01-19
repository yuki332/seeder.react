import React, { Component } from "react";

export default class Example extends Component {
	constructor(props){
		super(props);
		this.state = { msg: "Message from Component" };
	}
	render(){
		return(
			<div>
				<p style={{ color: this.props.color }}>This is example component</p>
				<p>{this.state.msg}</p>
			</div>
		);
	}
}
