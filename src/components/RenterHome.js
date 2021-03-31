import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RenterHomeForm from "./RenterHomeForm";
import { renterSearch } from "../actions/index";
import { useDispatch } from "react-redux";

const initialFormValues = {
  search: "",
  location: "",
};

function RenterHome() {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const dispatch = useDispatch();
  //dummy data same as owner
  const posts = [
    {
      name: "iphone",
      category: "phone",
      price_per_day: "25",
      rental_period: "7 days",
      description: "good phone",
      city: "Seattle",
      user_id: 1,
    },
    {
      name: "airpods",
      category: "headphones",
      price_per_day: "5",
      rental_period: "7 days",
      description: "listen up",
      city: "Seattle",
      user_id: 2,
    },
    {
      name: "macbook",
      category: "pc",
      price_per_day: "30",
      rental_period: "5 days",
      description: "type type type",
      city: "Seattle",
      user_id: 3,
    },
  ];

  const formSubmit = () => {
    dispatch(renterSearch(formValues)); // action
  };

  const handleDisplayClick = (e) => {
    e.preventDefault();
    history.push("/item");
    console.log('clicked')
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
      <div className="itemResults" >
        {posts &&
          posts.map((item, i) => (
            <div className="itemCard" key={i} 
            to="/item"
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

export default RenterHome;
