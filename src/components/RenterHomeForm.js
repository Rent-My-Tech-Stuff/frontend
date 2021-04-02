import React, { useState } from "react";
import styled from "styled-components";

const StyledPage = styled.div`
margin-top: 1rem;
font-family: "B612 mono";
background-color: #9D94ED;
font-size: 1.4rem;
`

const StyledSearch = styled.div`
margin-top: 2rem;`;
const StyledDropdown = styled.div`
margin-top: 0rem;
`;


const RenterHomeForm = (props) => {
  const initialValue = "";
  const { values, change, submit } = props;
  const [input, setInput] = useState(initialValue);

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { value, name} = evt.target;
    change(name, value);
  };

  return (
    <StyledPage>
      <form className="profileFormContainer" onSubmit={onSubmit}>
        <StyledDropdown>
          <label>
            Filter Results
            <select
              values={values.location}
              name="location"
              onChange={onChange}
            >
              <option value="zipcode">zip code</option>
              <option value="city">city</option>
              <option value="state">state</option>
              
            </select>
          </label>
        </StyledDropdown>
        <StyledSearch>
          <label>
            Search Bar
            <input
              values={input}
              onChange={onChange}
              name="search"
              type="text"
            />
          </label>
          <button type="submit">Search</button>
        </StyledSearch>
      </form>
    </StyledPage>
  );
};
export default RenterHomeForm;