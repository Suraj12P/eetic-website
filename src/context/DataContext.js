import reducer from "./DataReducer";
import { createContext, useReducer } from "react";
import { useEffect } from "react";
import React from "react";

const INITIAL_STATE = {
  events: JSON.parse(localStorage.getItem("events")) || null,
  careers: JSON.parse(localStorage.getItem("careers")) || null,
  isFetching: false,
  error: null,
};

export const DataContext = createContext(INITIAL_STATE);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(state.events));
    localStorage.setItem("careers", JSON.stringify(state.careers));
  }, [state.events, state.careers]);

  return (
    <DataContext.Provider
      value={{
        events: state.events,
        careers: state.careers,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
