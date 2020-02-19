import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllDrivers = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_DRIVERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_DRIVERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_DRIVERS_FAILED,
      payload: err
    });
  }
};

export const fetchOneDriver = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_DRIVERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_DRIVERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_DRIVERS_FAILED,
      payload: err
    });
  }
};

export const addDriver = newDriver => async dispatch => {
  dispatch({
    type: types.ADD_DRIVERS_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newDriver);
    dispatch({
      type: types.ADD_DRIVERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_DRIVERS_FAILED,
      payload: err
    });
  }
};

export const removeDriver = id => async dispatch => {
  dispatch({
    type: types.REMOVE_DRIVERS_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_DRIVERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_DRIVERS_FAILED,
      payload: err
    });
  }
};
