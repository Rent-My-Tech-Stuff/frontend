import React from 'react'
import styled from 'styled-components'


const StyledLoginForm = styled.div``

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
        <StyledLoginForm className='loginFormContainer' onSubmit={onSubmit}>
        <h2>Login</h2>
            <form>
                <label> Username
                <input
                    type="text"
                    name="username"
                    values={values.username}
                    onChange={onChange}
                />
                </label>
                <span className="errors">{errors.username}</span>
                <label> Password
                <input 
                    type="text"
                    name="password"
                    values={values.password}
                    onChange={onChange}
                    />

                </label>
                <span className="errors">{errors.password}</span>
            </form>
      <button disabled={disabled}>Log In</button>

        </StyledLoginForm>
        
    )
}

export default LoginForm