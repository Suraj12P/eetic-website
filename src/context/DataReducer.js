const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "START":
      return {
        events: null,
        isFetching: true,
        error: null,
      };
    case "SUCCESS":
      return {
        events: action.payload,
        isFetching: false,
        error: null,
      };
    case "FAIL":
      return {
        events: null,
        isFetching: false,
        error: "Failed to fetch data",
      };
    default:
      return { ...state };
  }
};

export default reducer;
