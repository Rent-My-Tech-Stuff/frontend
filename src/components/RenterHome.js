import React, { useState } from "react";
import RenterHomeForm from "./RenterHomeForm";

import { renterSearch } from "../actions/index";

const initialFormValues = {
  search: "",
  location: "",
};
function RenterHome() {
  const [formValues, setFormValues] = useState(initialFormValues);

  //dummy data same as owner
  const posts = [
    {
      name: "iphone",
      category: "phone",
      price_per_day: "25",
      rental_period: "7 days",
      description: "good phone",
      user_id: 1,
    },
    {
      name: "airpods",
      category: "headphones",
      price_per_day: "5",
      rental_period: "7 days",
      description: "listen up",
      user_id: 2,
    },
    {
      name: "macbook",
      category: "pc",
      price_per_day: "30",
      rental_period: "5 days",
      description: "type type type",
      user_id: 3,
    },
  ];

  const formSubmit = (value) => {
    renterSearch(value);
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
      <div className="itemResults">
        {posts &&
          posts.map((item, i) => (
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

export default RenterHome;
