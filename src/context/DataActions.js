export const fetchStart = () => ({
  type: "START",
});
export const fetchSuccess = (events) => ({
  type: "SUCCESS",
  payload: events,
});
export const fetchFail = () => ({
  type: "FAIL",
});
