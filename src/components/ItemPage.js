import { useParams } from 'react-router-dom'

const posts = [
  {    
    name: 'iphone',
    category: 'phone',
    price_per_day: '25',
    rental_period: '7 days',
    description: 'good phone',
    user_id: 1,
    id: 1
  },
  {
    name: 'airpods',
    category: 'headphones',
    price_per_day: '5',
    rental_period: '7 days',
    description: 'listen up',
    user_id: 2,
    id: 2
  },
  {
    name: 'macbook', 
    category: 'pc', 
    price_per_day: '30', 
    rental_period: '5 days', 
    description: 'type type type', 
    user_id: 3,
    id: 3

  },
]

function ItemPage() {

  
  // changed address within App so that it takes specific item id
  let { id } = useParams();

  //may or may not need this function but i needed it to try to use dummy data
  const product = posts.find(p => p.id === parseInt(id))

  return product ? (
    <div>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.price_per_day}</p>
      <p>{product.rental_period}</p>
      <p>{product.description}</p>
      
      {/* not sure how the data coming in is organized so labeled this username/email hoping theyre in same index as the post information */}

      {/* <p>{product.username}</p>
      <p>{product.email}</p> */}
    </div>
  ) : (
    <div>error</div>
  );
}

export default ItemPage;