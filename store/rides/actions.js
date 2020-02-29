import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllRides = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_RIDES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_RIDES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_RIDES_FAILED,
      payload: err
    });
  }
};

export const fetchOneRide = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_RIDES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_RIDES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_RIDES_FAILED,
      payload: err
    });
  }
};

export const addRide = newRide => async dispatch => {
  dispatch({
    type: types.ADD_RIDES_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newRide);
    dispatch({
      type: types.ADD_RIDES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_RIDES_FAILED,
      payload: err
    });
  }
};

export const removePassenger = id => async dispatch => {
  dispatch({
    type: types.REMOVE_RIDES_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_RIDES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_RIDES_FAILED,
      payload: err
    });
  }
};
