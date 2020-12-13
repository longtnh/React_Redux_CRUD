import * as actions from "../action/api.action";
import { getUserListApi } from "../../apis/SampleApi.api";

export const getUserList = () => dispatch => {
  dispatch(actions.getUserListRequested());
  return getUserListApi()
    .then(res => {
      dispatch(actions.getUserListSuccess(res));
    })
    .catch(err => dispatch(actions.getUserListFailed()));
};