import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OwnerHomeForm from "./OwnerHomeForm";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  ownerFetchData,
  ownerSelectItem,
  ownerChangeItem,
  ownerNewItem,
  ownerAddItem,
  ownerDeleteItem,
  ownerCancel,
} from "../actions";

//styling start
const StyledPost = styled.div``;
//styling end

const initialFormValues = {
  name: "",
  category: "",
  price_per_day: "",
  rental_period: "",
  description: "",
};

function OwnerHome(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [isAdding, setIsAdding] = useState(false)
  // const [isEditing, setIsEditing] = useState (false)

  const {
    message,
    items,
    user,
    thisItem,
    isEditing,
    isAdding,
    needToFetch,
    ownerFetchData,
    ownerSelectItem,
    ownerChangeItem,
    ownerNewItem,
    ownerAddItem,
    ownerDeleteItem,
    ownerCancel,
  } = props;

  useEffect(() => {
    if (user) {
      ownerFetchData();
    }
  }, [user, ownerFetchData]);

  useEffect(() => {
    if (thisItem) {
      setFormValues(thisItem);
    }
  }, [thisItem]);

  useEffect(() => {
    if (needToFetch) {
      ownerFetchData();
    }
  }, [needToFetch]);

  // const Add = () => {
  //   setIsAdding(!isAdding)
  // }

  // const Edit = () => {
  //   setIsEditing(!isEditing)
  // }
  //edit currently has no functionality at all so it's only use
  //at this point is just a cancel 'add new' button

  //dummy data
  // const posts = [
  //   {
  //     name: 'iphone',
  //     category: 'phone',
  //     price_per_day: '25',
  //     rental_period: '7 days',
  //     description: 'good phone',
  //     user_id: 1
  //   },
  //   {
  //     name: 'airpods',
  //     category: 'headphones',
  //     price_per_day: '5',
  //     rental_period: '7 days',
  //     description: 'listen up',
  //     user_id: 2
  //   },
  //   {
  //     name: 'macbook',
  //     category: 'pc',
  //     price_per_day: '30',
  //     rental_period: '5 days',
  //     description: 'type type type',
  //     user_id: 3
  //   },
  // ]

  // const update = (e) => {
  //   e.preventDefault();
  //   const employee = {
  //       name: this.state.name,
  //       age: this.state.age,
  //       salary: this.state.salary,
  //   }
  //   axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
  //   .then(res => console.log(res.data));
  //     }

  const inputChange = (name, value) => {
    console.log(formValues);
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
      [name]: value,
    });
  };

  const HideButton = styled.div`
    .addButton {
      display: none;
    }
  `;

  const submit = () => {
    if (isEditing) {
      ownerChangeItem(thisItem.item_id, formValues);
    } else if (isAdding) {
      ownerAddItem({ ...formValues, user_id: user.user_id });
    }
  };

  // useEffect(() => {
  //   homeSchema.isValid(formValues).then(valid =>
  //     setDisabled(!valid))
  //   }, [formValues])

  return (
    <div className="owner-container">
      <h1>Owner Home</h1>
      {message}

      <button className="addButton" onClick={() => ownerNewItem()}>
        Add New Item
      </button>

      <h2>
        {isAdding && "Add Item"}
        {isEditing && "Edit Item"}
      </h2>
      {isAdding || isEditing ? (
        <div>
          <OwnerHomeForm
            values={formValues}
            setFormValues={setFormValues}
            submit={submit}
          />
          <button onClick={() => ownerCancel()}>Cancel</button>
        </div>
      ) : null}
      {/* {isAdding ? HideButton : null} */}

      {items.map((post, i) => (
        <div className="post-container" key={i}>
          <h2>{post.name}</h2>
          <p>{post.category}</p>
          <p>{post.description}</p>
          <p>{post.price_per_day}</p>
          <p>{post.rental_period}</p>

          <button onClick={() => ownerSelectItem(post.item_id)}>
            Edit Item
          </button>

          <button onClick={() => ownerDeleteItem(post.item_id)}>
            Delete Item
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    items: state.items,
    user: state.user,
    thisItem: state.thisItem,
    needToFetch: state.needToFetch,
    isEditing: state.isEditing,
    isAdding: state.isAdding,
  };
};
export default connect(mapStateToProps, {
  ownerFetchData,
  ownerSelectItem,
  ownerChangeItem,
  ownerNewItem,
  ownerAddItem,
  ownerDeleteItem,
  ownerCancel,
})(OwnerHome);
