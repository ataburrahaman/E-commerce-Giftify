import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constant/index";

const AuthContext = createContext();

const authReducer = (auth, { type, payload, value }) => {
  switch (type) {
    case "SET_USER_TOKEN":
      return { ...auth, userToken: payload };
    case "SET_LOADER":
      return { ...auth, loading: !auth.loading };
    case "SET_USER":
      return { ...auth, user: payload };
    case "SET_CURRENT_USER":
      return { ...auth, currentUser: payload };
    case "CLEAR_USER":
      return { ...auth, userToken: "", user: {}, currentUser: "" };
    default:
      return { ...auth };
  }
};

export const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(authReducer, {
    userToken: "",
    currentUser: "",
    user: {},
    loading: false
  });

  useEffect(() => {
    const userCredentials = JSON.parse(localStorage?.getItem("login_token"));
    userCredentials?.token &&
      authDispatch({
        type: "SET_USER_TOKEN",
        payload: userCredentials.token
      });
    userCredentials?.userName &&
      authDispatch({
        type: "SET_CURRENT_USER",
        payload: userCredentials.userName
      });
    userCredentials?._id &&
      authDispatch({ type: "SET_USER", payload: userCredentials._id });
  }, []);

  const navigate = useNavigate();

  const LoginUserWithCredentials = async (user, pathTo) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/login`, user);
      if (response.status === 200) {
        localStorage.setItem(
          "login_token",
          JSON.stringify({
            token: response.data.token,
            userName: response.data.username
          })
        );
        authDispatch({ type: "SET_TOKEN", payload: response.data.token });
        authDispatch({
          type: "SET_CURRENTUSER",
          payload: response.data.username
        });

        navigate(pathTo, { replace: pathTo });
      }
      return response;
    } catch (err) {
      return err;
    }
  };

  const logoutHandler = (to) => {
    authDispatch({ type: "SET_LOADER" });
    setTimeout(() => {
      localStorage?.removeItem("login_token");
      authDispatch({
        type: "SET_TOKEN",
        payload: ""
      });
      authDispatch({ type: "SET_LOADER" });
      navigate(to);
    }, 2000);
  };

  return (
    <AuthContext.Provider
      value={{ auth, authDispatch, LoginUserWithCredentials, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
