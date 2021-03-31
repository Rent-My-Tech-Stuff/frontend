function ItemPage(props) {

  const  { 
    name,
    // category, 
    // price_per_day, 
    // rental_period, 
    // description,  
  } = props

  const posts = [
    {    
      name: 'iphone',
      category: 'phone',
      price_per_day: '25',
      rental_period: '7 days',
      description: 'good phone',
      user_id: 1
    },
    {
      name: 'airpods',
      category: 'headphones',
      price_per_day: '5',
      rental_period: '7 days',
      description: 'listen up',
      user_id: 2
    },
    {
      name: 'macbook', 
      category: 'pc', 
      price_per_day: '30', 
      rental_period: '5 days', 
      description: 'type type type', 
      user_id: 3
    },
  ]

  const product = posts.find(p => p.user_id)

  return product ? (
    <div>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.price_per_day}</p>
      <p>{product.rental_period}</p>
      <p>{product.description}</p>
    </div>
  ) : (
    <div>error</div>
  );
}

export default ItemPage;