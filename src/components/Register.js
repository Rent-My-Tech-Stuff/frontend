import React, { useState, useEffect } from "react";
import registrationSchema from "./RegistrationSchema";
import RegistrationForm from "./RegistrationForm";
import * as yup from "yup";
import styled from "styled-components";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../actions";

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  firstname: "",
  lastname: "",
  streetAddress: "",
  city: "",
  state: "",
  zipcode: "",
  //radio button
  role: "",
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  firstname: "",
  lastname: "",
  streetAddress: "",
  city: "",
  state: "",
  zipcode: "",
  //dropdown
  role: "",
};

const initialDisabled = true;

const Register = (props) => {
  let { register } = props;
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(registrationSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const loginSubmit = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      streetAddress: formValues.streetAddress.trim(),
      city: formValues.city.trim(),
      state: formValues.state.trim(),
      zipcode: formValues.zipcode.trim(),
      role: formValues.role.trim(),
    };
    console.log(formValues);
    register(formValues, history);
  };

  useEffect(() => {
    registrationSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <RegistrationForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, message: state.message };
};

export default connect(mapStateToProps, { register })(Register);
