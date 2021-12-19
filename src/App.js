import React, { useEffect, useState, lazy } from "react";

import { Routes, Route } from "react-router";
import { PageCenterLoader }  from './components/Loading/PageCenterLoader'
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const MainHome = lazy(() => import("./Pages/Home/Home"));
const LoginPage = lazy(() => import("./Pages/Login/Login"));
const SignInPage = lazy(() => import("./Pages/SignIn/SignIn"));

function App({ props }) {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [status, setStatus] = useState({
    loading: true,
    error: false
  });

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setStatus({...status, loading: false})
    }, 1000);
    return(
      ()=> clearInterval(timeout)
     )
  },[status])

  return (
    <div className='App'>
      <Navbar
        openHamburger={openHamburger}
        setOpenHamburger={setOpenHamburger}
      />
      <div>
        {status.loading ? (
          <PageCenterLoader />
        ) : (
          <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignInPage />} />
            <Route path='/wishlist' element={<SignInPage />} />
            <Route path='/checkout/cart' element={<SignInPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
