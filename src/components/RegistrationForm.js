import React from "react";
import styled from "styled-components";

const StyledRegistrationForm = styled.form``;

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
    <StyledRegistrationForm
      className="registrationFormContainer"
      onSubmit={onSubmit}
    >
      <h2>Sign Up</h2>

      <label>
        Create a Username
        <input
          type="text"
          name="username"
          values={values.username}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.username}</span>

      <label>
        Create a Password
        <input
          type="text"
          name="password"
          values={values.password}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.password}</span>

      <label>
        Enter your email
        <input
          type="text"
          name="email"
          values={values.email}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.email}</span>

      <label>
        First name
        <input
          type="text"
          name="firstname"
          values={values.firstname}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.firstname}</span>

      <label>
        Last name
        <input
          type="text"
          name="lastname"
          values={values.lastname}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.lastname}</span>

      <label>
        Address
        <input
          type="text"
          name="streetAddress"
          values={values.streetAddress}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.streetAddress}</span>

      <label>
        City
        <input
          type="text"
          name="city"
          values={values.city}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.city}</span>

      <label>
        State
        <input
          type="text"
          name="state"
          values={values.state}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.state}</span>

      <label>
        Zipcode
        <input
          type="text"
          name="zipcode"
          values={values.zipcode}
          onChange={onChange}
        />
      </label>
      <span className="errors">{errors.zipcode}</span>

      <label>
        Choose an Account Type
        <select values={values.role} name="role" onChange={onChange}>
          <option value="">--Select an Account Type-- </option>
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
        </select>
      </label>
      <span className="errors">{errors.role}</span>

      <button disabled={disabled}>Sign Up</button>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
