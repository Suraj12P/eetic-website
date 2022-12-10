import reducer from "./DataReducer";
import { createContext, useReducer } from "react";
import { useEffect } from "react";
import React from "react";

const INITIAL_STATE = {
  events: JSON.parse(localStorage.getItem("events")) || null,
  isFetching: false,
  error: null,
};

export const DataContext = createContext(INITIAL_STATE);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(state.events));
  }, [state.events]);

  return (
    <DataContext.Provider
      value={{
        events: state.events,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
