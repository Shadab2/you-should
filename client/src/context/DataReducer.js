const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "MODAL_OPEN":
      return {
        ...state,
        modalOpen: true,
      };
    case "MODAL_CLOSE":
      return {
        ...state,
        modalOpen: false,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default DataReducer;
