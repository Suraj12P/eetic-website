import AuthReducer from "./AuthReducer";
import { createContext, useReducer } from "react";
import { useEffect } from "react";
import React from "react";

const INITIAL_STATE = {
  events: JSON.parse(localStorage.getItem("events")) || null,
  isFetching: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(state.events));
  }, [state.events]);

  return (
    <AuthContext.Provider
      value={{
        events: state.events,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
