import React from 'react'
import styled from 'styled-components'

//styling start
const StyledDiv = styled.div`
background-color: white;
border-radius: 20%20%;
opacity: 0.7;
width: 60%;
position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 2rem;
font-family: 'B612 mono';
`

const Inputs = styled.div`
display: flex;
flex-direction: column;

& input {
    font-family: 'B612 mono';
    margin: 1rem 2rem 2rem 2rem;
  }
`
const ButtonStyled = styled.button`
width: 20%;
margin: 3rem 1rem 3rem 1rem;
padding: 0.8rem;
align-self: center;
font-size: 1.4rem;
font-family: 'B612 mono';
border: solid 5px #6943D5;
border-radius: 20%20%;
color: #6943D5;
`
const ErrorMessage = styled.p`
  margin-top: 0;
  color: darkRed;
  font-size: 0.8rem;
  `
//styling end


const LoginForm = (props) => {
    const {values, submit, change, disabled, errors } = props;
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }
    const onChange = (evt) => {
        const {name, value} = evt.target
        change(name, value);
    }

    return(
        <StyledDiv>
                <style>
    @import url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');
    </style>

        <StyledLoginForm className='loginFormContainer' onSubmit={onSubmit} >
            
            <h1>Login</h1>
            <Inputs>
                <label> Username
                <input
                    type="text"
                    name="username"
                    values={values.username}
                    onChange={onChange}
                />
                </label>
                {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

                <label> Password
                <input 
                    type="text"
                    name="password"
                    values={values.password}
                    onChange={onChange}
                    />

                </label>
            </Inputs>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

                <ButtonStyled disabled={disabled}>Log In </ButtonStyled>
        </StyledLoginForm>
        </StyledDiv>
        
    )
}

export default LoginForm