import React, { useState, useEffect } from "react";
import registrationSchema from "./RegistrationSchema";
import RegistrationForm from "./RegistrationForm";
import * as yup from "yup";
import styled from "styled-components";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../actions";

//styling start
const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-grow: 1;
`;
const StyledBackgroundImg = styled.div`
  background-image: linear-gradient(
      rgba(255, 0, 195, 0.3),
      rgba(255, 0, 195, 0.3)
    ),
    url(${(props) => props.imageUrl});
  position: relative;
  height: 100%;
  background-position: center 40px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-grow: 1;
`;
//styling end

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
    <StyledDiv>
      <StyledBackgroundImg imageUrl="https://i.pinimg.com/736x/7f/99/cb/7f99cbd17100174bb26d9433e7ed1388.jpg">
        <RegistrationForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </StyledBackgroundImg>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, message: state.message };
};

export default connect(mapStateToProps, { register })(Register);
