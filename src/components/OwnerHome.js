import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from 'axios';
import OwnerHomeForm from "./OwnerHomeForm"
import styled from 'styled-components'
import {connect} from 'react-redux';
import { ownerFetchData } from "../actions";


const initialFormValues= {
  name: "",
  category: "",
  price_per_day: "",
  rental_period: "",
  description: "",
  
}


function OwnerHome(props) {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState (false)

  const {message,items, user, ownerFetchData} = props;
  useEffect(() => {
    console.log('useEffect triggers');
    ownerFetchData();
  }, [user]);
  

  const Add = () => {
    setIsAdding(!isAdding)
  }

  const Edit = () => {
    setIsEditing(!isEditing)
  }
  //edit currently has no functionality at all so it's only use 
  //at this point is just a cancel 'add new' button

  //dummy data 
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

    
    const update = (e) => {
      e.preventDefault();
      const employee = {
          name: this.state.name,
          age: this.state.age,
          salary: this.state.salary,
      }
      axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
      .then(res => console.log(res.data));
        }
  
  
    const inputChange = (name, value) => {
      console.log(formValues)
      // yup.reach(name)
      //   .validate(value)
      //   .then(() => {
      //     setFormErrors({...formErrors, [name]: ''})
      //   })
      //   .catch(err => {
      //     setFormErrors({...formErrors, [name]: err.errors[0]})
      //   })
      setFormValues({
        ...formValues,
        [name]: value 
      })
    }

    const HideButton = styled.div`
    .addButton{
      display: none;
    } 
    `

    

    // useEffect(() => {
    //   homeSchema.isValid(formValues).then(valid => 
    //     setDisabled(!valid))
    //   }, [formValues])
  
  
    return (
      <div className='owner-container'>
        <h1>Owner Home</h1>
          {message}
          
          <button className="addButton" onClick={Add}>
            Add New Item
          </button> 
          
            
          {isAdding ? <OwnerHomeForm values={formValues}/> : null}
          {/* {isAdding ? HideButton : null} */}


          {items.map((post, i) => (
          <div 
            className='post-container'
            key={i}>
    
          <h2>{post.name}</h2>
          <p>{post.category}</p>
          <p>{post.description}</p>
          <p>{post.price_per_day}</p>
          <p>{post.rental_period}</p>

        
        
          <button onClick={Add}>Edit Item</button>

        
          <Link to="/">
            <button>Delete Item</button>
          </Link>
        
       
        
  
        </div>
        ))}
      </div>
    )
  }

const mapStateToProps = state => {
  return {message: state.message, items: state.items, user: state.user};
}
export default connect(mapStateToProps, {ownerFetchData})(OwnerHome);