import api from "../services/Api";

export const GET_DATA = "GET_DATA";
const initState = {
  account: null
};

export const getDataAction = (data) => ({
  type: GET_DATA,
  data
});

export const getApi = (params) => async (dispatch) => {
  // call api
  // const result = await api();
  // // dispatch(getDataAction(result));
  // dispatch({ type: "GET_DATA", data: result });
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA:
      console.log("action.data", action.data);
      return {
        account: action.data
      };

    default:
      return state;
  }
};

export default authReducer;
