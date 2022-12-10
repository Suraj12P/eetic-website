export const fetchStart = () => ({
  type: "START",
});
export const fetchEvent = (events) => ({
  type: "SUCCESS_E",
  payload: events,
});
export const fetchCareers = (careers) => ({
  type: "SUCCESS_C",
  payload: careers,
});
export const fetchFail = () => ({
  type: "FAIL",
});
