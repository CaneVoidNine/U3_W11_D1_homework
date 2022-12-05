import { GET_JOBS } from "../actions";

const initialState = {
  array: [],
};

const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        array: action.payload,
      };
    default:
      return state;
  }
};
export default arrayReducer;
