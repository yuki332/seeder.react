import React, { Component } from "react";
import Example from "./example.js";

export default class App extends Component {
  render(){
    return(
      <div>
        <h1 className="title"> Hello, World! </h1>
        <Example color="blue" />
      </div>
    );
  }
}
