import React, { useReducer } from "react";
import DataReducer from "./DataReducer";
import { tasks } from "../data";

export const INITIAL_STATE = {
  user: "",
  isFetching: false,
  error: null,
  tasks: [],
  modalOpen: false,
  currentTask: {},
};

export const DataContext = React.createContext(INITIAL_STATE);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);
  console.log(state);
  const { user, isFetching, error, modalOpen, currentTask, tasks } = state;
  return (
    <DataContext.Provider
      value={{
        user,
        isFetching,
        error,
        modalOpen,
        tasks,
        currentTask,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
