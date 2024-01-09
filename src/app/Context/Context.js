import { createContext, useContext, useReducer, useState } from "react";

const initailState = {
  user: null,
  role: false,
  token: null,
};

const authContext = createContext(initailState);

const authReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };

    default:
      return initailState;
  }
};

export const authContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducers, initailState);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
