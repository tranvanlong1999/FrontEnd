import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./imput";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    // object muon validate and schema
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    if (!error) return null;

    const errors = {};
    // chung ta co the su dung reduce
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    // lay mot phan nho tu schema thoi
    const schema = { [name]: this.schema[name] };
    // chung ta chi validate 1 field nen chi de y den 1 object con
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSumit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    // nếu không có lỗi thì error object is null nên ta phải làm việc bên dưới
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
