import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
export const EDIT_USERNAME = "EDIT_USERNAME";

export const loginUser = (email, password, rememberMe, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        const token = response.data.body.token;

        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }

        dispatch({
          type: LOGIN
        });

        navigate("/user");
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Invalid Username or Password",
      });
    }
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  return {
    type: LOGOUT
  };
};

export const fetchUserProfile = () => {
  return async (dispatch) => {
    let token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        { headers: { Authorization: `Bearer ${token}` }}
      );

      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch({
          type: FETCH_USER_PROFILE,
          payload: userProfile,
        });
      }

    } catch (error) {
      console.error(error);
    }
  };
};

export const updateUserName = (userName) => {
  return async (dispatch) => {
    let token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        { headers: { Authorization: `Bearer ${token}` }}
      );

      if (response.status === 200) {
        dispatch({
          type: EDIT_USERNAME,
          payload: userName,
        });
      }
      
    } catch (error) {
      console.error(error);
    }
  };
};