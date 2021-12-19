import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constant/index";


const AuthContext = createContext();

const authReducer = (auth, { type, payload, value }) => {
  console.log("payload", payload, type);
  switch (type) {
    case "SET_USER_TOKEN":
      return { ...auth, userToken: payload };
    case "SET_LOADER":
      return { ...auth, loading: !auth.loading };
    case "SET_USER":
      return { ...auth, user: payload };
    // case "SET_CURRENT_USER":
    //   return { ...auth, user: payload };
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
    // const userCredentials = JSON.parse(localStorage?.getItem("login_token"));
    // userCredentials?.token &&
    //   authDispatch({
    //     type: "SET_USER_TOKEN",
    //     payload: userCredentials.token
    //   });
    // userCredentials?.userName &&
    //   authDispatch({
    //     type: "SET_CURRENT_USER",
    //     payload: userCredentials.userName
    //   });
    // userCredentials?._id &&
    //   authDispatch({ type: "SET_USER", payload: userCredentials._id });
    getUserToken()
  }, []);

  const getUserToken= async()=>{
    try{
    const response = await axios.get(`${BACKEND_URL}/api/user/auth/current/user`, {withCredentials: true});
    console.log(response.data)
    authDispatch({
      type: "SET_USER",
      payload: response.data.user
    });
    }catch(error){
      // if(error.response.status === 401){
      //   console.log("you dont Have Access: ", error);
      // }
      console.log("error: ", error);
    }

  }

  const navigate = useNavigate();

  // const LoginUserWithCredentials = async (user, pathTo) => {
  //   try {
  //     const response = await axios.post(`${BACKEND_URL}/login`, user);
  //     if (response.status === 200) {
  //       localStorage.setItem(
  //         "login_token",
  //         JSON.stringify({
  //           token: response.data.token,
  //           userName: response.data.username
  //         })
  //       );
  //       authDispatch({ type: "SET_TOKEN", payload: response.data.token });
  //       authDispatch({
  //         type: "SET_CURRENTUSER",
  //         payload: response.data.username
  //       });

  //       navigate(pathTo, { replace: pathTo });
  //     }
  //     return response;
  //   } catch (err) {
  //     return err;
  //   }
  // };

  const LoginUserWithCredentials = async (user, pathTo) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/user/login`,
        {
          email: 'test@gmail.com',
          password: '123@123'
        },
        {withCredentials: true});
      if (response.status === 200) {
        // localStorage.setItem(
        //   "login_token",
        //   JSON.stringify({
        //     token: response.data.token,
        //     userName: response.data.username
        //   })
        // );
        // authDispatch({ type: "SET_TOKEN", payload: response.data.token });
        authDispatch({
          type: "SET_USER",
          payload: response.data.user
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
