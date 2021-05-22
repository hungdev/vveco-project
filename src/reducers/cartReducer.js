import * as ActionTypes from "../actions/actionTypes";
const initState = {
  products: []
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CART:
      console.log(action); // {type: 'ADD_CART', data: 'sp'}
      //do something
      // const newProduct = [...state.products, action.data]
      // return store
      return {
        products: [...state.products, action.data]
      };
    case ActionTypes.UPDATE:
      const cloneSt = [...state.products];
      cloneSt[action.data.ind] = action.data.value;
      return {
        products: cloneSt
      };

    default:
      return state;
  }
};
export default cartReducer;
