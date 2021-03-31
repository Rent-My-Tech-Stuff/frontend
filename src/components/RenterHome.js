import React, { useState } from "react";
import RenterHomeForm from "./RenterHomeForm";

import {connect} from 'react-redux';
import { renterSearch } from "../actions/index";
import { useDispatch } from "react-redux";

const initialFormValues = {
  search: "",
  location: "",
};
function RenterHome(props) {
  const {
    items,
    message,
    renterSearch
  } = props;

  const [formValues, setFormValues] = useState(initialFormValues);
  //dummy data same as owner


  const formSubmit = () => {
    let location = '';
    renterSearch('a','a'); // action
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <div>
      <RenterHomeForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
      {message}
      <div className="itemResults">
        {items &&
          items.map((item, i) => (
            <div className="itemCard" key={i}>
              <h2>{item.name}</h2>
              <p>{item.price_per_day}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items,
    message: state.message,
  }
}

export default connect(mapStateToProps, {renterSearch})(RenterHome);
