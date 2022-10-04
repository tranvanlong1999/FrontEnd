import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
class RegisterFrom extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  doSubmit = () => {
    // call server
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSumit}>
          {this.renderInput("username", "UserName")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterFrom;
