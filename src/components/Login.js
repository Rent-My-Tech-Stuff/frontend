import React, {useState, useEffect} from 'react'
import LoginForm from './LoginForm'
import loginSchema from './LoginSchema'
import * as yup from "yup";
import styled from 'styled-components'

import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {login} from '../actions';


const initialFormValues = {
  username : "",
  password : "",
}

const initialFormErrors = {
  username : "",
  password : "",
}

const initialDisabled = true

const Login = (props) => {

const {message, login, user} = props;
const history = useHistory();

const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);

useEffect(() => {
  if (message) {
    setFormErrors({username:'', password:message}); // TEMPORARY ONLY!
  }
}, [message]);

useEffect(() => {
  if (user) {
    if (user.role === 'owner') {
      history.push('/owner-home');
    } else if (user.role === 'renter') {
      history.push('/renter-home');
    }
  }
}, [user, history]);


const inputChange = (name, value) => {
  yup
  .reach(loginSchema, name)
  .validate(value)
  .then(() => {
    setFormErrors({...formErrors, [name]: "",})
  })
  .catch((err) => {
    setFormErrors({...formErrors, [name]: err.errors[0]})
  })

setFormValues({
  ...formValues, [name]: value
})
}

const formSubmit = () => {
  login(formValues);
}

useEffect(() => {
  loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
}, [formValues]);


  return (
    <div>

      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        
      />

    </div>
  );
}

const mapStateToProps = state => {
  return {message: state.message, user: state.user};
}

export default connect(mapStateToProps, {login})(Login);