import axios from '../services/Api'

export const UPLOAD_LOGO = "upload/UPLOAD_LOGO";
export const RESET = "upload/RESET";
export const CHANGE_FIELD = "upload/CHANGE_FIELD";
const initState = {
  logo: null
};

export const reset = () => ({
  type: RESET,
});

const url = '/upload/shop'

export const setField = (field, value) => async (dispatch) => {
  dispatch({ type: CHANGE_FIELD, field, value })
};

export const uploadFileLogo = (params) => async (dispatch) => {
  const result = await dispatch({
    type: UPLOAD_LOGO,
    data: await axios.post(`${url}/logo`, params)
  });
  return result;
};


const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case UPLOAD_LOGO:
      console.log('action.data?.data', action.data)
      return {
        ...state,
        logo: action.data?.data?.data?.[0],
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
