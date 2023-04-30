import axios from 'axios';
import { LoginAPI, RegisterAPI } from './../api/AuthAPI';

export const RegisterAction = (dataUser) => {
  return async (dispatch) => {
    dispatch({ type: "IS_REGISTERING" })
    try {
      let response = await RegisterAPI(dataUser)
      let data = await response.data
      if (data) {
        dispatch({ type: "REGISTER_SUCCESSFULLY", payload: data })
      } else {
        throw new Error("Invalid response data")
      }
    } catch (error) {
      // username has already been taking
      console.log("Error:", error.message)
      dispatch({ type: "REGISTER_ERROR" })
    }
  };
};
export const LoginAction = (dataUser) => {
  return async (dispatch) => {
    dispatch({ type: "IS_LOGGING" })
    try {
      let response = await LoginAPI(dataUser)
      let data = await response.data
      if (data) {
        dispatch({ type: "LOGIN_SUCCESSFULLY", payload: data })
      } else {
        throw new Error("Invalid response data")
      }
    } catch (error) {
      // username has already been taking
      console.log("Error:", error.message)
      dispatch({ type: "IS_WRONG_PASSWORD" })
    }
  };
};
