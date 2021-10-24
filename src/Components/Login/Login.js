import React, { Component } from "react";
import Joi from "joi-browser";
import Footer from "../Footer";
import "./Login.css";
import logo from "../../assets/login-shape.svg";
import { Link, withRouter, Redirect } from "react-router-dom";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";

import styled from "styled-components";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) return;
  };
  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} }, () =>
        this.props.history.push({
          pathname: "/Home",
          username: this.state.username,
        })
      );
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    //Set State
    this.setState({ errors });
    return errors;
  };
  render() {
    return (
      <React.Fragment>
        <div className="loginCont">
          {/* logo */}
          <div className="Logo"></div>

          {/* body */}
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3" style={{ backgroundImage: "none" }}>
                <input
                  className="form-control input"
                  placeholder="Username"
                  onChange={this.handleChange}
                  name="username"
                />
                {this.state.errors.username && (
                  <div className="alert alert-danger">
                    {this.state.errors.username}
                  </div>
                )}
              </div>

              <div className="mb-3" style={{ backgroundImage: "none" }}>
                <input
                  type="password"
                  className="form-control input"
                  placeholder="Password"
                  onChange={this.handleChange}
                  name="password"
                />
                {this.state.errors.password && (
                  <div className="alert alert-danger">
                    {this.state.errors.password}
                  </div>
                )}
              </div>

              <button type="submit" className="login ">
                Login
              </button>
            </form>
          </div>
          <div className="cont container-fluid">
            <div className="row foot">
              <img src={Facebook} style={{ width: "2.3%", height: "2%" }} />
              <img src={Twitter} style={{ width: "3%", height: "3%" }} />
              <img src={Instagram} style={{ width: "3%", height: "3%" }} />
            </div>
            <div className="row">
              <h5>&copy; Cinema App-All Right Reserved</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
