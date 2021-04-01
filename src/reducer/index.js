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
  RENTER_SEARCH_START,
  RENTER_SEARCH_SUCCESS,
  RENTER_SEARCH_FAILURE,
  RENTER_SELECT,
} from '../actions';

export const initialState = {
  user: null,
  registeredUser: null,
  items: [],
  thisItem: null,
  isAdding: false,
  isEditing: false,
  needToFetch: false,
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
      localStorage.setItem('userId', action.payload.user.user_id);
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
        message : '',
        needToFetch: false,
      }
    case OWNER_FETCH_DATA_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: 'Failed to get data from server',
        needToFetch: false,
      }
    case OWNER_SELECT_ITEM:
      return {
        ...state,
        isEditing: true,
        isAdding: false,
        thisItem: state.items.find(item => item.item_id === action.payload),
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
        needToFetch: true,
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
        message: '',
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
        message: '',
        needToFetch: true,
      }
    case OWNER_ADD_ITEM_FAILURE:
      console.log(action.payload);
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
        message: '',
        needToFetch: true,
      }
    case OWNER_DELETE_ITEM_FAILURE:
      return {
        ...state,
        message: 'Failed to delete'
      }
    case RENTER_SEARCH_START:
      return {
        ...state,
        message: 'Searching',
      }
    case RENTER_SEARCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        message: '',
      }
    case RENTER_SEARCH_FAILURE:
      return {
        ...state,
        message: 'Failed to search'
      }
    case RENTER_SELECT:
      return {
        ...state,
        message: '',
        thisItem: action.payload
      }
    default:
      return state;
  }
}