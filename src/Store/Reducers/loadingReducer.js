import { LOADING } from "../../Actions/types";

const initialState = {
    loading : false,
};
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING:
        return{
            ...state,
            loading: action.payload
        }
      default:
        return state;
    }
  };
  
  export default authReducer;
  