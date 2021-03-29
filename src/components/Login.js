import React, {useState, useEffect} from 'react'
import LoginForm from './LoginForm'
import loginSchema from './LoginSchema'
import * as yup from "yup";
import styled from 'styled-components'



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

const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);

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
  const loginSubmit = {
    username: formValues.username.trim(),
    password: formValues.password.trim(),
  };


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

export default Login;