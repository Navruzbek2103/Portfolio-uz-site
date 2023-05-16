export const reducers = (state, action) => {
  switch (action.type) {
    case "PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
