import axios from '../services/Api'

export const CREATE_SHOP = "shop/CREATE_SHOP";
export const GET_SHOP = "shop/GET_SHOP";
export const RESET = "shop/RESET";
export const CHANGE_FIELD = "shop/CHANGE_FIELD";
const initState = {
  logo: null,
  shop: null,
};

export const reset = () => ({
  type: RESET,
});

const url = '/api/shopinfo'

export const setField = (field, value) => async (dispatch) => {
  dispatch({ type: CHANGE_FIELD, field, value })
};

export const createShop = (params) => async (dispatch) => {
  const result = await dispatch({
    type: CREATE_SHOP,
    data: await axios.post(`${url}/ins`, params)
  });
  return result;
};
export const getShop = (params) => async (dispatch) => {
  const userId = localStorage.getItem('userId');
  const result = await dispatch({
    type: GET_SHOP,
    data: await axios.get(`/api/user/getbyid/${userId}/shop`, params)
  });
  return result;
};


const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_SHOP:
      return {
        ...state,
      };
    case GET_SHOP:
      return {
        ...state,
        shop: action.data?.data?.data,
      };
    case CHANGE_FIELD:
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

export default uploadReducer
