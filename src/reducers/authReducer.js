import axios from '../services/Api'

export const LOGIN = "auth/LOGIN";
export const RESET = "auth/RESET";
export const GET_DATA = "GET_DATA";
const initState = {
  account: null,
  token: null
};

export const getDataAction = (data) => ({
  type: GET_DATA,
  data
});
export const reset = () => ({
  type: RESET,
});

export const login = (params) => async (dispatch) => {
  // call api
  // dispatch({ type: "GET_DATA", data: await api(); });

  const result = await dispatch({
    type: LOGIN,
    data: await axios.post(`/auth/login`, params)
  });
  // dispatch(getMe())
  return result;
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.data?.data?.accessToken);
      localStorage.setItem('userId', action.data?.data?.user.id);
      return {
        ...state,
        account: action.data?.data?.user,
        token: action.data?.data?.accessToken
      };
    case RESET:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default authReducer;
