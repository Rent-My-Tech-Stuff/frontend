import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RenterHomeForm from "./RenterHomeForm";
import styled from 'styled-components'
import {connect} from 'react-redux';
import { renterSearch, renterSelect } from "../actions/index";
import { useDispatch } from "react-redux";

const Img = styled.div`
background-image: linear-gradient(rgba(255,0,195,0.3), rgba(255,0,195,0.3)), url(${props => props.imageUrl});
height: 100%;
background-position: center 40px;
background-repeat: no-repeat;
background-size: cover;
flex-grow: 1;
`

const StyledDiv = styled.div`
display: flex;
flex-direction: collumn;
flex-wrap: wrap;`


const StyledCard = styled.div`
background-color: white;
opacity: 0.7;
border-radius: 10%;
flex-grow: 1;
justify-content: flex-start;
width: 20rem;
height: 40%;
margin: 3rem;
font-family: "B612 mono";
`

const initialFormValues = {
  search: "",
  location: "zipcode",
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
    console.log(formValues.location);
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
    <Img imageUrl="https://i.pinimg.com/736x/7f/99/cb/7f99cbd17100174bb26d9433e7ed1388.jpg">
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');
    </style>
      <RenterHomeForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
      {message}
      <StyledDiv className="itemResults" >
        {items &&
          items.map((item, i) => (
            <StyledCard className="itemCard" key={i} 
            onClick={(e) => handleDisplayClick(e, item)}>
              <h2>{item.name}</h2>
              <h3>${item.price_per_day} per day</h3>
              <p>located in {item.city}</p>
              <p>{item.description}</p>

            </StyledCard>
          ))}
      </StyledDiv>
    
    </Img>
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
