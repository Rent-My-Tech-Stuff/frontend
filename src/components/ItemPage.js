import {connect} from 'react-redux';

function ItemPage(props) {
  const product = props.thisItem;

  return product ? (
    <div>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.price_per_day}</p>
      <p>{product.rental_period}</p>
      <p>{product.description}</p>
      <p>{product.firstname} {product.lastname}</p>
      <p>{product.email}</p>
    </div>
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