import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/narBar";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterFrom from "./components/registerForm";
import NewMovies from "./components/newMovies";
import "./App.css";

class App2 extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          {/* generate auto  
                    Route[path][component]*4
                */}
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={NewMovies}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/register" component={RegisterFrom}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App2;
