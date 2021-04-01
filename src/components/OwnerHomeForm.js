import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function OwnerHomeForm(props) {

  const {
    values,
    submit,
    setFormValues,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


  const onChange = evt => {
    setFormValues({
      ...values,
      [evt.target.name]: evt.target.value
    });
  }


  
  
  return (
    <form className='form container' onSubmit={onSubmit}>
        
        <label>Name
        <input
        onChange={onChange}
        type='text'
        name='name'
        value={values.name}
        />
      </label>

      <label>Category
        <input
        onChange={onChange}
        type='text'
        name='category'
        value={values.category}
        />
      </label>

      <label>description
        <input
        onChange={onChange}
        type='text'
        name='description'
        value={values.description}
        />
      </label>

      <label>price per day
        <input
        onChange={onChange}
        type='text'
        name='price_per_day'
        value={values.price_per_day}/>
      </label>

      <label>rental period
        <input
        onChange={onChange}
        type='text'
        name='rental_period'
        value={values.rental_period}
        />
      </label>

      <button>Submit</button>

    </form>
  )
}