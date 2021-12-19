import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import "../Login/login.css";

import { BACKEND_URL } from "../../constant";
import { useAuth } from "../../context/AuthProvider";
import { Toast } from "../../components/Toast/Toast";

export default function Home() {
  const navigate = useNavigate();
  const { auth, authDispatch } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState({
    enable: false,
    message: ""
  });

  const validation = () => {
    let isFieldValidation = true;

    if (!firstName) {
      isFieldValidation = false;
    }
    if (!secondName) {
      isFieldValidation = false;
    }
    if (!phoneNumber) {
      isFieldValidation = false;
    }
    if (!email) {
      isFieldValidation = false;
    }
    if (!password) {
      isFieldValidation = false;
    }

    if (isFieldValidation) {
      const body = {
        firstName: firstName,
        lastName: secondName,
        email: email,
        password: password,
        mobile: phoneNumber
      };
      signup(body);
    }
  };
  const hideToast = () => {
    setTimeout(() => {
      setToastMessage({ enable: false, message: "" });
    }, 3000);
  };

  useEffect(() => {
    !isEmpty(auth.user) && navigate("/");
  });

  const signup = async (data) => {
    console.log("data", data);
    try{
    const response = await axios.post(`${BACKEND_URL}/api/user/signup`, data, {withCredentials: true});
    

    if (!response.data.success) {
      enableToast(response.data);
    }
    if (response.status === 200 && response.data.success) {
        console.log("User Data", response.data.user);
      authDispatch({
        type: "SET_USER",
        payload: response.data.user
      });
    }
}catch(e){
    console.log("Responce: n", e)
    enableToast({message:'Something wrong!'});
}

    // fetch(`${BACKEND_URL}/api/user/signup`, {
    //     method: 'post',
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   .then(response => response.json())
    //   .then((response)=> {
    //     if (response.status !== 200) {
    //     enableToast(response);
    //     }
    //     if (response.status === 200) {
    //         authDispatch({
    //             type: "SET_CURRENT_USER",
    //             payload: response.name
    //           });
    //     }

    //   })
    //   .catch(function (error) {
    //     console.log('Request failed', error);
    //   });
  };

  const enableToast = ({ message }) => {
    setToastMessage({ enable: true, message });
    hideToast();
  };

  return (
    <div className='flex-center login-from justification-element signup-box-position'>
      <div className='login-info-box display-center login-container'>
        <h1>Welcome Back!</h1>
        <h4>
          Sign in form, web design ui ux, login interface with gradient, vector
          illustration
        </h4>
      </div>
      <div className='vertical-line' />
      <div className='login-container'>
        <h1 className='purple-txt'>Create an account</h1>
        <div className='input-group'>
          <TextField
            id='outlined-firstname'
            value={firstName}
            label='First Name'
            variant='outlined'
            required
            className='input-area'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <TextField
            id='outlined-lastname'
            value={secondName}
            required
            label='Second Name'
            variant='outlined'
            className='input-area'
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <TextField
            id='outlined-number'
            label='Phone Number'
            required
            value={phoneNumber}
            variant='outlined'
            type='number'
            className='input-area'
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className='input-group flex'>
          <TextField
            id='outlined-email'
            value={email}
            label='Email'
            required
            variant='outlined'
            className='input-area'
            color='primary'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <TextField
            id='outlined-password'
            label='Password'
            required
            value={password}
            type='password'
            variant='outlined'
            className='input-area'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <Button
            variant='contained'
            className='input-area sold-button-purple-color button-bold-style'
            onClick={validation}
          >
            Sign up
          </Button>
        </div>
        <small>
          You have an account?{". "}
          <span
            className='purple-txt underline pointer'
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </small>
      </div>
      {toastMessage.enable && (
        <Toast message={toastMessage.message} type='show-toast' />
      )}
    </div>
  );
}
