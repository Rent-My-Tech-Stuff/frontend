import React from "react";
import styled from "styled-components";

//styling start
const StyledDiv = styled.div`
  background-color: white;
  border-radius: 20%20%;
  margin-top: 7rem;
  padding: 1rem 5rem 1rem 5rem;
  opacity: 0.7;
  width: 60%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledRegistrationForm = styled.form`
  font-size: 1rem;
  font-family: "B612 mono";
`;

const Inputs = styled.div`
  & label {
    float: left;
    width: 15rem;
    padding-right: 2rem;
    padding-top: 2rem;
  }
  & input {
    float: left;
    width: calc(100% - 2rem);
  }
`;

const ButtonStyled = styled.button`
  width: 30%;
  margin: 3rem 10rem 3rem 10rem;
  padding: 0.8rem;
  font-size: 1.4rem;
  font-family: "B612 mono";
  border: solid 5px #6943d5;
  border-radius: 20%20%;
  color: #6943d5;
`;

const ErrorMessage = styled.p`
  margin-top: 0;
  color: darkRed;
  font-size: 0.8rem;
`;
//styling end

const RegistrationForm = (props) => {
  const { values, submit, change, errors, disabled } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledDiv>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');
      </style>
      <StyledRegistrationForm
        className="registrationFormContainer"
        onSubmit={onSubmit}
      >
        <h2>Sign Up</h2>
        <Inputs>
          <label>
            Create a Username
            <input
              type="text"
              name="username"
              values={values.username}
              onChange={onChange}
            />
            {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          </label>

          <label>
            Create a Password
            <input
              type="text"
              name="password"
              values={values.password}
              onChange={onChange}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </label>

          <label>
            Enter your email
            <input
              type="text"
              name="email"
              values={values.email}
              onChange={onChange}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </label>

          <label>
            First name
            <input
              type="text"
              name="firstname"
              values={values.firstname}
              onChange={onChange}
            />
            {errors.firstname && (
              <ErrorMessage>{errors.firstname}</ErrorMessage>
            )}
          </label>

          <label>
            Last name
            <input
              type="text"
              name="lastname"
              values={values.lastname}
              onChange={onChange}
            />
            {errors.lastname && <ErrorMessage>{errors.lastname}</ErrorMessage>}
          </label>

          <label>
            Address
            <input
              type="text"
              name="streetAddress"
              values={values.streetAddress}
              onChange={onChange}
            />
            {errors.streetAddress && (
              <ErrorMessage>{errors.streetAddress}</ErrorMessage>
            )}
          </label>

          <label>
            City
            <input
              type="text"
              name="city"
              values={values.city}
              onChange={onChange}
            />
            {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
          </label>

          <label>
            State
            <input
              type="text"
              name="state"
              values={values.state}
              onChange={onChange}
            />
            {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
          </label>

          <label>
            Zipcode
            <input
              type="text"
              name="zipcode"
              values={values.zipcode}
              onChange={onChange}
            />
            {errors.zipcode && <ErrorMessage>{errors.zipcode}</ErrorMessage>}
          </label>

          <label>
            Choose an Account Type
            <select values={values.role} name="role" onChange={onChange}>
              <option value="">--Select an Account Type-- </option>
              <option value="renter">Renter</option>
              <option value="owner">Owner</option>
            </select>
            {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
          </label>
        </Inputs>
        <ButtonStyled>Sign Up</ButtonStyled>
      </StyledRegistrationForm>
    </StyledDiv>
  );
};

export default RegistrationForm;
