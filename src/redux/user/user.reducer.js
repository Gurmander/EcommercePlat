import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
}

// State will be initial state by default unless mentioned
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return{
        // everything in Initialstate remains same with ...state except currentUser as we manually rewrite it here
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;