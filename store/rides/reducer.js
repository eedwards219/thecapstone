import * as types from "./constants";

const initialState = {
  all: []
};

function ridesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_RIDES_PENDING:
    case types.ADD_RIDES_PENDING:
    case types.REMOVE_RIDES_PENDING:
      return state;

    case types.FETCH_ALL_RIDES_FAILED:
    case types.ADD_RIDES_FAILED:
    case types.REMOVE_RIDES_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_RIDES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_RIDES_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_RIDES_SUCCESS:
      return {
        ...state,
        all: state.all.filter(ride => ride.id === action.payload.id)
      };

    default:
      return state;
  }
}
export default ridesReducer;
