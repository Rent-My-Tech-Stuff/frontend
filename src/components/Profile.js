import React, { useState } from 'react'
import ProfileForm from './ProfileForm'
import {
  renterSearch
} from "../actions/index"


const initialFormValues = {
  search: "",
  location: "",
}

function Profile() {

  const [formValues, setFormValues] = useState(initialFormValues)

  const formSubmit = (value) => {
    renterSearch(value);
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value,
    })
  }
  return (
    <div>
      <ProfileForm 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      />

    </div>
  );
}

export default Profile;