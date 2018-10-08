import React, { Component } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
      return ( 
          <div>
              {/* <h1 className = "heading-primary"> */}
                  <div className = "title-plate" >
                      <p className = "title-box"></p> 
                      <p className = "title-shadow title1">Search</p> 
                      <p className = "title-shadow title2">Party</p> 
                      <p className = "title-box"></p> 
                  </div>
              {/* </h1> */}
          </div>
      );
  }
}

export default withRouter(App);