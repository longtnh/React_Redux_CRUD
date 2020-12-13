import { GET_USER_LIST_REQUESTED, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILED } from '../action/api.action'

const initialState = {
  loading: false,
  users: null
};

const sampleApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    }
    case GET_USER_LIST_FAILED: {
      return {
        ...state,
        loading: false,
        users: null
      };
    }

    default: {
      return state;
    }
  }
};

export default sampleApiReducer;