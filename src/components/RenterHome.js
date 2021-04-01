import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RenterHomeForm from "./RenterHomeForm";

import {connect} from 'react-redux';
import { renterSearch, renterSelect } from "../actions/index";
import { useDispatch } from "react-redux";

const initialFormValues = {
  search: "",
  location: "",
};


const RenterHome = (props) => {
  const {
    items,
    message,
    user,
    renterSearch,
    renterSelect,
  } = props;

  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  //dummy data same as owner

  const formSubmit = () => {
    let location = '';
    if (formValues.location === 'zipcode') {
      location = user.zipcode;
    } else if (formValues.location === 'city') {
      location = user.city;
    } else if (formValues.location === 'state') {
      location = user.state;
    }
    renterSearch(formValues.search, location);
  };

  const handleDisplayClick = (e, item) => {
    e.preventDefault();
    renterSelect(item);
    history.push("/item");
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
      <div className="itemResults" >
        {items &&
          items.map((item, i) => (
            <div className="itemCard" key={i} 
            onClick={(e) => handleDisplayClick(e, item)}>
              <h2>{item.name}</h2>
              <p>${item.price_per_day} per day</p>
              <p>located in {item.city}</p>
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
    user: state.user,
  }
};

export default connect(mapStateToProps, {renterSearch, renterSelect})(RenterHome);
