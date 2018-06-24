import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Login from "./login";
import Register from "./registration";
import Home from "./Home";



class Main extends Component {
	render()  {
		return (
			<HashRouter>
        <div>
          <h1>Welcome to Influence app.</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Register">Register</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
          </div>
        </div>
      </HashRouter>
			  );

	}
}

export default Main;