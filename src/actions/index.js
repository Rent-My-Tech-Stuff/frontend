import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth';

// log in and receive a token
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => dispatch => {
  dispatch({type:LOGIN_START});
  axios.post('https://rent-my-tech-stuff.herokuapp.com/api/login', credentials)
    .then(res => {
      dispatch({type:LOGIN_SUCCESS, payload:res.data});
    })
    .catch(err => {
      dispatch({type:LOGIN_FAILURE});
    });
}

// log out and delete token
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logout = () => dispatch => {

}

// register a new acccount
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (registerInfo) => dispatch => {

}

// owner fetches their list of items
export const OWNER_FETCH_DATA_START = 'OWNER_FETCH_DATA_START';
export const OWNER_FETCH_DATA_SUCCESS = 'OWNER_FETCH_DATA_SUCCESS';
export const OWNER_FETCH_DATA_FAILURE = 'OWNER_FETCH_DATA_FAILURE';

export const ownerFetchData = () => dispatch => {
  const ownerId = localStorage.getItem('userId');
  dispatch({type:OWNER_FETCH_DATA_START});
  axiosWithAuth().get(`https://rent-my-tech-stuff.herokuapp.com/api/owners/${ownerId}`)
    .then(res => {
      dispatch({type:OWNER_FETCH_DATA_SUCCESS, payload:res.data});
    })
    .catch(err => {
      dispatch({type:OWNER_FETCH_DATA_FAILURE, payload:err});
    });
}


// owner selects one of their items for editing
export const OWNER_SELECT_ITEM = 'OWNER_SELECT_ITEM';

export const ownerSelectItem = (id) => {
  return {type:OWNER_SELECT_ITEM, payload:id};
}

// owner uses the edit form and submits to change the item
export const OWNER_CHANGE_ITEM_START = 'OWNER_CHANGE_ITEM_START';
export const OWNER_CHANGE_ITEM_SUCCESS = 'OWNER_CHANGE_ITEM_SUCCESS';
export const OWNER_CHANGE_ITEM_FAILURE = 'OWNER_CHANGE_ITEM_FAILURE';

export const ownerChangeItem = (id, item) => dispatch => {

}

// owner selects a new item on their 
export const OWNER_NEW_ITEM = 'OWNER_NEW_ITEM';

export const ownerNewItem = () => {
  return {type:OWNER_NEW_ITEM};
}

export const OWNER_ADD_ITEM_START = 'OWNER_ADD_ITEM_START';
export const OWNER_ADD_ITEM_SUCCESS = 'OWNER_ADD_ITEM_SUCCESS';
export const OWNER_ADD_ITEM_FAILURE = 'OWNER_ADD_ITEM_FAILURE';

export const ownerAddItem = (item) => dispatch => {

}

export const OWNER_CANCEL = 'OWNER_CANCEL';

export const ownerCancel = () => {
  return {type:OWNER_CANCEL};
}

export const OWNER_DELETE_ITEM_START = 'OWNER_DELETE_ITEM_START';
export const OWNER_DELETE_ITEM_SUCCESS = 'OWNER_DELETE_ITEM_SUCCESS';
export const OWNER_DELETE_ITEM_FAILURE = 'OWNER_DELETE_ITEM_FAILURE';

export const ownerDeleteItem = (id) => dispatch => {

}

export const RENTER_SEARCH_START = 'RENTER_SEARCH_START';
export const RENTER_SEARCH_SUCCESS = 'RENTER_SEARCH_SUCCESS';
export const RENTER_SEARCH_FAILURE = 'RENTER_SEARCH_FAILURE';

export const renterSearch = (searchTerm, location) => dispatch => {

}