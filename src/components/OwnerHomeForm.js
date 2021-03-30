import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function OwnerHomeForm(props) {

  const {
    values,
    submit,
    change,
    disabled,
    name
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }


  
  
  return (
    <form className='form container' onSubmit={onSubmit}>
        
        <label>Name
        <input
        onChange={onChange}
        type='text'
        />
      </label>

      <label>Category
        <input
        onChange={onChange}
        type='text'
        />
      </label>

      <label>description
        <input
        onChange={onChange}
        type='text'
        />
      </label>

      <label>price per day
        <input
        onChange={onChange}
        type='text'
        />
      </label>

      <label>rental period
        <input
        onChange={onChange}
        type='text'
        />
      </label>

      <button>add</button>

    </form>
  )
}