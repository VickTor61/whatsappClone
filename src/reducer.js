export const initialState = {
  user: "fe",
  messages: ""
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_MESSAGES: "SET_MESSAGES"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

      case actionTypes.SET_MESSAGES:
      console.log(action.messages)

        return {
          ...state,
          messages: action.messages
        }

    default:
      return state;
  }
};

export default reducer;
