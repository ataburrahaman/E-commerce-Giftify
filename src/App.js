import React, { useEffect, useState, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Routes, Route } from "react-router";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const MainHome = lazy(() => import("./components/Home/Home"));

function App({ props }) {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [status, setStatus] = useState({
    loading: true,
    error: false
  });

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setStatus({...status, loading: false})
    }, 5000);
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
          <CircularProgress color='inherit' />
        ) : (
          <Routes>
            <Route path='/' element={<MainHome />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
