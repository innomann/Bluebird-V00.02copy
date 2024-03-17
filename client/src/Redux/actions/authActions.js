import axios from "axios";
import { SET_CURRENT_USER } from "./actionType";
import { setErrors, clearErrors } from "./errorActions";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const loginUser =  (userData,dispatch) => {

  axios
    .post("http://localhost:5000/api/users/login", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      window.location.href = "/";
      
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(setErrors(err.response.data));
    });
};

export const setCurrentUser = (userData) => {
  return {
    type: SET_CURRENT_USER,
    payload: userData,
  };
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser({}));
  window.location.href = "./login";
};
