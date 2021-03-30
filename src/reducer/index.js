import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

export const initialState = {
  user: null,
  registeredUser: null,
  items: [],
  thisItem: null,
  isAdding: false,
  isEditing: false,
  message: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return state;
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        message: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        message: 'Username or password incorrect'
      }
    default:
      return state;
  }
}