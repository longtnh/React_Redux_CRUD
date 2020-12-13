export const GET_USER_LIST_REQUESTED = "pages/SampleApi/GET_USER_LIST_REQUESTED";
export const GET_USER_LIST_SUCCESS = "pages/SampleApi/GET_USER_LIST_SUCCESS";
export const GET_USER_LIST_FAILED = "pages/SampleApi/GET_USER_LIST_FAILED";

export const getUserListRequested = () => ({
    type: GET_USER_LIST_REQUESTED
  });
  
  export const getUserListSuccess = payload => {
    return {
      type: GET_USER_LIST_SUCCESS,
      payload
    };
  };
  
  export const getUserListFailed = () => ({
    type: GET_USER_LIST_FAILED
  });