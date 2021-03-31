import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  OWNER_FETCH_DATA_START,
  OWNER_FETCH_DATA_SUCCESS,
  OWNER_FETCH_DATA_FAILURE,
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
      localStorage.setItem('userId', action.payload.user.id);
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
    case REGISTER_START:
    case REGISTER_SUCCESS:
    case REGISTER_FAILURE:
    case OWNER_FETCH_DATA_START:
      return {
        ...state,
        message: 'Fetching data from server...',
      }
    case OWNER_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload,
        message : ''
      }
    case OWNER_FETCH_DATA_FAILURE:
      return {
        ...state,
        message: 'Failed to get data from server',
      }
    case OWNER_SELECT_ITEM:
      return {
        ...state,
        isEditing: true,
        isAdding: false,
        thisItem: items.find(item => item.id === action.payload),
        message: ''
      }
    case OWNER_CHANGE_ITEM_START:
      return {
        ...state,
        message: 'Updating...'
      }
    case OWNER_CHANGE_ITEM_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isAdding: false,
        thisItem: null,
        message: '',
      }
    case OWNER_CHANGE_ITEM_FAILURE:
      return {
        ...state,
        message: 'Update failed'
      }
    case OWNER_NEW_ITEM:
      return {
        ...state,
        isEditing: false,
        isAdding: true,
        thisItem: null,
        message: ''
      }
    case OWNER_ADD_ITEM_START:
      return {
        ...state,
        message: 'Adding...'
      }
    case OWNER_ADD_ITEM_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isAdding: false,
        thisItem: null,
        message: ''
      }
    case OWNER_ADD_ITEM_FAILURE:
      return {
        ...state,
        message: 'Failed to add item'
      }
    case OWNER_CANCEL:
      return {
        ...state,
        isEditing: false,
        isAdding: false,
        thisItem: null,
        message: ''
      }
    case OWNER_DELETE_ITEM_START:
      return {
        ...state,
        message: 'Deleting...'
      }
    case OWNER_DELETE_ITEM_SUCCESS:
      return {
        ...state,
        message: ''
      }
    case OWNER_DELETE_ITEM_FAILURE:
      return {
        ...state,
        message: 'Failed to delete'
      }
    default:
      return state;
  }
}