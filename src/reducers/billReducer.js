import axios from '../services/Api'

export const GET_BILL = "auth/GET_BILL";
export const RESET = "auth/RESET";
export const GET_DATA = "GET_DATA";
export const GET_PROVINCE = "GET_PROVINCE";
export const GET_DISTRICT = "GET_DISTRICT";
export const GET_WARD = "GET_WARD";
const initState = {
  bills: null,
};

export const reset = () => ({
  type: RESET,
});

const url = '/api/bill/shop'

export const getBills = (params) => async (dispatch) => {
  // call api
  const result = await dispatch({
    type: GET_BILL,
    data: await axios.get(`${url}/1/get`, { params })
  });
  return result;
};


const billReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BILL:
      console.log('action.data?.data', action.data?.data)
      return {
        ...state,
        bills: action.data?.data?.data,
        total: action.data?.data?.meta?.total
      };
    case RESET:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default billReducer;
