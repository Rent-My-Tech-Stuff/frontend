import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledItem = styled.div`
  font-family: 'B612 mono';
  font-size: 2.5rem;
  color: white;
  text-decoration: none;
  margin: 0.4rem;
  border: solid 8px white;
  padding: 3%;
`

const Img = styled.div`

background-image: linear-gradient(rgba(255,0,195,0.3), rgba(255,0,195,0.3)), url(${props => props.imageUrl});
height: 100%;
background-position: center 40px;
background-repeat: no-repeat;
background-size: cover;
flex-grow: 1;
`

function ItemPage(props) {
  const product = props.thisItem;

  return product ? (
    <Img imageUrl="https://i.pinimg.com/736x/7f/99/cb/7f99cbd17100174bb26d9433e7ed1388.jpg">
    <StyledItem>
      
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.price_per_day}</p>
      <p>{product.rental_period}</p>
      <p>{product.description}</p>
      <p>{product.firstname} {product.lastname}</p>
      <p>{product.email}</p>
      
    </StyledItem>
    </Img>
  ) : (
    <div>error</div>
  );
}

const mapStateToProps = (state) => {
  return {
    thisItem: state.thisItem
  };
}

export default connect(mapStateToProps, {})(ItemPage);