import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  margin: -1rem;
  background-color: white;
  border-radius: 10%;
  opacity: 0.7;
  font-family: "B612 mono";

  input {
    display: flex;
    flex-wrap: wrap;
    flex-direction: collumn;
    margin: 1rem;
    font-family: "B612 mono";
  }

  button {
    padding: 1rem;
    font-family: "B612 mono";
    color: #6943d5;
    font-size: 1rem;
    margin: 1rem;
    border: 3px solid #6943d5;
    border-radius: 20%;
  }
`;

export default function OwnerHomeForm(props) {
  const { values, submit, setFormValues } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    setFormValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <StyledForm>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');
      </style>
      <form className="form container" onSubmit={onSubmit}>
        <label>
          Name
          <input
            onChange={onChange}
            type="text"
            name="name"
            value={values.name}
          />
        </label>

        <label>
          Category
          <input
            onChange={onChange}
            type="text"
            name="category"
            value={values.category}
          />
        </label>

        <label>
          description
          <input
            onChange={onChange}
            type="text"
            name="description"
            value={values.description}
          />
        </label>

        <label>
          price per day
          <input
            onChange={onChange}
            type="text"
            name="price_per_day"
            value={values.price_per_day}
          />
        </label>

        <label>
          rental period
          <input
            onChange={onChange}
            type="text"
            name="rental_period"
            value={values.rental_period}
          />
        </label>

        <button>Submit</button>
      </form>
    </StyledForm>
  );
}
