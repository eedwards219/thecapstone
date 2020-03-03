import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllPassengers = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_PASSENGERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_PASSENGERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_PASSENGERS_FAILED,
      payload: err
    });
  }
};

export const fetchOnePassenger = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_PASSENGERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_PASSENGERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_PASSENGERS_FAILED,
      payload: err
    });
  }
};

export const addPassengers = newPassenger => async dispatch => {
  dispatch({
    type: types.ADD_PASSENGERS_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newPassenger);
    dispatch({
      type: types.ADD_PASSENGERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_PASSENGERS_FAILED,
      payload: err
    });
  }
};

export const removePassenger = id => async dispatch => {
  dispatch({
    type: types.REMOVE_PASSENGERS_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_PASSENGERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_PASSENGERS_FAILED,
      payload: err
    });
  }
};
