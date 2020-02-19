import * as types from "./constants";

const initialState = {
  all: []
};

function driversReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_DRIVERS_PENDING:
    case types.ADD_DRIVERS_PENDING:
    case types.REMOVE_DRIVERS_PENDING:
      return state;

    case types.FETCH_ALL_DRIVERS_FAILED:
    case types.ADD_DRIVERS_FAILED:
    case types.REMOVE_DRIVERS_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_DRIVERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_DRIVERS_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_DRIVERS_SUCCESS:
      return {
        ...state,
        all: state.all.filter(driver => driver.id === action.payload.id)
      };

    default:
      return state;
  }
}
export default driversReducer;
