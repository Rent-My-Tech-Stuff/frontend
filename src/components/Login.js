import React, {useState, useEffect} from 'react'
import LoginForm from './LoginForm'
import loginSchema from './LoginSchema'
import * as yup from "yup";
import styled from 'styled-components'

import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {login} from '../actions';


//styling start
const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
margin: 0;
display: flex;
flex-grow: 1;

`

const StyledBackgroundImg = styled.div`
background-image: linear-gradient(rgba(255,0,195,0.3), rgba(255,0,195,0.3)), url(${props => props.imageUrl});
position: relative;
height: 100%;
background-position: center 40px;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-grow: 1;

`
//styling end

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
    <StyledDiv>
    <StyledBackgroundImg imageUrl="https://i.pinimg.com/736x/7f/99/cb/7f99cbd17100174bb26d9433e7ed1388.jpg">

      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        
      />

    </StyledBackgroundImg>
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {message: state.message, user: state.user};
}

export default connect(mapStateToProps, {login})(Login);