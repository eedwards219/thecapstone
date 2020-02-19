import * as types from "./constants";

const initialState = {
  all: []
};

function passengersReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_PASSENGERS_PENDING:
    case types.ADD_PASSENGERS_PENDING:
    case types.REMOVE_PASSENGERS_PENDING:
      return state;

    case types.FETCH_ALL_PASSENGERS_FAILED:
    case types.ADD_PASSENGERS_FAILED:
    case types.REMOVE_PASSENGERS_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_PASSENGERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_PASSENGERS_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_PASSENGERS_SUCCESS:
      return {
        ...state,
        all: state.all.filter(driver => driver.id === action.payload.id)
      };

    default:
      return state;
  }
}
export default passengersReducer;
