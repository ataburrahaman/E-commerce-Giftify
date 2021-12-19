import React, {useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login.css";
import { BACKEND_URL } from "../../constant";
import { useAuth } from "../../context/AuthProvider";
import isEmpty from "lodash/isEmpty";


export default function Home() {
  // const { auth, authDispatch } = useAuth();
  const { auth, LoginUserWithCredentials } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      !isEmpty(auth.user) && navigate("/");
    });

    const onLoginClick = async()=>{
      // try{
      //   const response = await axios.post(`${BACKEND_URL}/api/user/login`,
      //   {
      //     email: 'test@gmail.com',
      //     password: '123@123'
      //   });
      //   console.log(response.data)
      //   authDispatch({
      //     type: "SET_CURRENT_USER",
      //     payload: response.data.user
      //   });
      //   }catch(error){
      //     if(error.response.status === 401){
      //       console.log("you dont Have Access: ", error);
      //     }
      //     console.log("error: ", error);
      //   }
      
        const response = await LoginUserWithCredentials(
      
          location.state?.from ? location.state.from : '/',
        );
        if (response.status === 200) {
          // dispatch({
          //   type: 'TOGGLE_TOAST',
          //   payload: 'You have been logged in successfully, Happy Shopping',
          //   value: true,
          // });
          // hideToast();
        }
        if (response.status !== 200) {
          // setErrorFromBackend(response.response.data.error);
        }
      
    }
    
  return (
    <div className='flex-center login-from justification-element login-box-position'>
      <div className='login-container'>
        <h1 className='purple-txt'>LOGIN</h1>
        <div className='input-group'>
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            className='input-area'
          />
        </div>
        <div className='input-group'>
          <TextField
            id='outlined-basic'
            label='Password'
            type='password'
            variant='outlined'
            className='input-area'
          />
        </div>
        <div className='input-group'>
          <Button
            variant='contained'
            className='input-area sold-button-purple-color button-bold-style'
            onClick={onLoginClick}
          >
            Log in
          </Button>
        </div>
        <small>
          Don't have an account?{" "}
          <span className='purple-txt underline pointer' onClick={() => navigate('/signup')}>
            Create an account
          </span>
        </small>
      </div>
      <div className='vertical-line' />
      <div className='login-info-box display-center login-container'>
        <h1>Welcome Back!</h1>
        <h4>
          Sign in form, web design ui ux, login interface with gradient, vector
          illustration
        </h4>
      </div>
    </div>
  );
}
