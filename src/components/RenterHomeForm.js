import React, { useState } from "react";
import styled from "styled-components";

const StyledPage = styled.div``;
const StyledSearch = styled.div``;
const StyledDropdown = styled.div``;


const RenterHomeForm = (props) => {
  const initialValue = "";
  const { values, change, submit, disabled } = props;
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
              <option value="">-------</option>
              <option value="zipcode">zip code</option>
              <option value="city">city</option>
              <option value="state">state</option>
              <option value="anywhere">anywhere</option>
              
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