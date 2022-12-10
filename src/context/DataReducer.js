const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "START":
      return {
        events: null,
        careers: null,
        isFetching: true,
        error: null,
      };
    case "SUCCESS_E":
      return {
        events: action.payload,
        careers: JSON.parse(localStorage.getItem("careers")) || null,
        isFetching: false,
        error: null,
      };
    case "SUCCESS_C":
      return {
        events: JSON.parse(localStorage.getItem("events")) || null,
        careers: action.payload,
        isFetching: false,
        error: null,
      };
    case "FAIL":
      return {
        events: null,
        careers: null,
        isFetching: false,
        error: "Failed to fetch data",
      };
    default:
      return { ...state };
  }
};

export default reducer;
