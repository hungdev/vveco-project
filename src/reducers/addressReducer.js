import axios from '../services/Api'

export const GET_BILL = "province/GET_BILL";
export const RESET = "province/RESET";
export const GET_DATA = "province/GET_DATA";
export const GET_PROVINCE = "province/GET_PROVINCE";
export const GET_DISTRICT = "province/GET_DISTRICT";
export const GET_WARD = "province/GET_WARD";
export const CHANGE_FIELD = "province/CHANGE_FIELD";
const initState = {
  provinces: [],
  districts: [],
  wards: [],
};

export const reset = () => ({
  type: RESET,
});

const url = '/api/address'

export const getProvince = (params) => async (dispatch) => {
  // call api
  const result = await dispatch({
    type: GET_PROVINCE,
    data: await axios.get(`${url}/province`, { params })
  });
  return result;
};
export const getDistrict = (id, params) => async (dispatch) => {
  // call api
  const result = await dispatch({
    type: GET_DISTRICT,
    data: await axios.get(`${url}/district/${id}`, { params })
  });
  return result;
};
export const getWard = (id, params) => async (dispatch) => {
  // call api
  const result = await dispatch({
    type: GET_WARD,
    data: await axios.get(`${url}/ward/${id}`, { params })
  });
  return result;
};

export const setField = (field, value) => async (dispatch) => {
  // call api
  dispatch({ type: CHANGE_FIELD, field, value })
};


const addressReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROVINCE:
      console.log('action.data?.data', action.data?.data)
      return {
        ...state,
        provinces: action.data?.data?.data,
      };
    case GET_DISTRICT:
      console.log('action.data?.data', action.data?.data)
      return {
        ...state,
        districts: action.data?.data?.data,
      };
    case GET_WARD:
      console.log('action.data?.data', action.data?.data)
      return {
        ...state,
        wards: action.data?.data?.data,
      };
    case CHANGE_FIELD:
      console.log('action.data?.data', action.data?.data)
      return {
        ...state,
        [action.field]: action.value
      };
    case RESET:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default addressReducer
