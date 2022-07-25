import React, { useReducer } from "react";
import DataReducer from "./DataReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: null,
  todos: [],
  modalOpen: false,
};

export const DataContext = React.createContext(INITIAL_STATE);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);
  const { user, isFetching, error, todos, modalOpen } = state;
  return (
    <DataContext.Provider
      value={{ user, isFetching, error, modalOpen, todos, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};
