import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

//styling start
const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
margin: 0;
display: flex;
flex-grow: 1;

h1{
  font-weight: 70;
  font-family: 'B612 mono';
  font-size: 5rem;
  color: white;
}`

const Img = styled.div`

background-image: linear-gradient(rgba(255,0,195,0.3), rgba(255,0,195,0.3)), url(${props => props.imageUrl});
height: 100%;
background-position: center 40px;
background-repeat: no-repeat;
background-size: cover;
flex-grow: 1;
`
const Style = styled.div`
  display: flex;
  justify-content: space-evenly;
margin: 12rem 0rem 10rem 5rem;
`


const StyledLink = styled(Link)`
  align-content: flex-end;
  font-family: 'B612 mono';
  font-size: 3rem;
  color: white;
  text-decoration: none;
  margin: 0.4rem;
  border: solid 8px white;
  border-radius: 18%;
  padding: 3%;
`

//styling end


function SplashPage() {

  return (
    <StyledDiv>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');
    </style>
    <Img imageUrl="https://i.pinimg.com/736x/7f/99/cb/7f99cbd17100174bb26d9433e7ed1388.jpg">
      <h1>App Name Here</h1>
      <Style>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register Now</StyledLink>
      </Style>
    </Img>
    </StyledDiv>
  );
}

export default SplashPage;