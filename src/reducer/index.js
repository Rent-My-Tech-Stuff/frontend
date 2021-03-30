import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  OWNER_SELECT_ITEM,
  OWNER_CHANGE_ITEM_START,
  OWNER_CHANGE_ITEM_SUCCESS,
  OWNER_CHANGE_ITEM_FAILURE,
  OWNER_NEW_ITEM,
  OWNER_ADD_ITEM_START,
  OWNER_ADD_ITEM_SUCCESS,
  OWNER_ADD_ITEM_FAILURE,
  OWNER_CANCEL,
  OWNER_DELETE_ITEM_START,
  OWNER_DELETE_ITEM_SUCCESS,
  OWNER_DELETE_ITEM_FAILURE,
} from '../actions';

export const initialState = {
  token: '',
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
      return {
        ...state,
        message: 'Logging in...'
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        message: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        message: 'Username or password incorrect'
      }
    case REGISTER_START:
    case REGISTER_SUCCESS:
    case REGISTER_FAILURE:
    case OWNER_SELECT_ITEM:
    case OWNER_CHANGE_ITEM_START:
    case OWNER_CHANGE_ITEM_SUCCESS:
    case OWNER_CHANGE_ITEM_FAILURE:
    case OWNER_NEW_ITEM:
    case OWNER_ADD_ITEM_START:
    case OWNER_ADD_ITEM_SUCCESS:
    case OWNER_ADD_ITEM_FAILURE:
    case OWNER_CANCEL:
    case OWNER_DELETE_ITEM_START:
    case OWNER_DELETE_ITEM_SUCCESS:
    case OWNER_DELETE_ITEM_FAILURE:
    default:
      return state;
  }
}