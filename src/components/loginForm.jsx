import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    //all  data
    data: { username: "", password: "" },
    // all error
    errors: {},
  };

  // define schema k nhất thiết phải là một phần của state bởi vì nó k support change
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call server
    console.log("summitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSumit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
