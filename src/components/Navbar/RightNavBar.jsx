import React, { useState, useRef, useEffect, useMemo } from "react";
import { Link,NavLink, useLocation, useNavigate } from "react-router-dom";
import isEmpty from 'lodash/isEmpty'
import { useAuth } from "../../context/AuthProvider";
import { useProduct } from "../../context/ProductProvider";
const privateRoutes = ['/wishlist', '/checkout/cart', '/checkout/address'];

export default function RightNavbar() {
  const { auth, logoutHandler } = useAuth();
  const [hover, setHover] = useState(false);

  const {
    state: { cart, wishlist },
    dispatch
  } = useProduct();
  const location = useLocation();
  const navigate = useNavigate();

  const useOutsideClickDetecter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          hoverHandler();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideClickDetecter(wrapperRef);

  const loginHandler = () => {
    navigate("/login");
  };

  const hoverHandler = () => {
    setHover((hover) => !hover);
  };
  const logout = () => {
    logoutHandler(
      privateRoutes.includes(location.pathname) ? "/" : location.pathname
    );
    dispatch({ type: "CLEAR_CART_AND_WISHLIST" });

    setHover((prev) => false);
  };
  return useMemo(() => {
  return (
    <>
      <ul className='right flex-center rm-ul-padding'>
        {console.log("Data: auth.user:  ",auth.user)}
        <div className='navbar__list pointer'>
          {!isEmpty(auth.user) ? (
            <div onClick={hoverHandler} className='purple-txt flex-center'>
              <i className='fa fa-user purple-txt profile-icon-style'></i>
              <span className="user-set-name">Hi {auth?.user ? auth.user.name : ""}!</span>
            </div>
          ) : (
            <div className='purple-txt pointer' onClick={loginHandler}>
              LOGIN / SIGNUP
            </div>
          )}
        </div>
        <li className='navbar__list cart-wishlist pointer'>
          <div className='notification-badge-container'>
            <Link to='/wishlist'>
              <i className='fa fa-heart'></i>
            </Link>

            {auth.token && (
              <div className='notification-badge flex-center'>
                <span>{wishlist.length}</span>
              </div>
            )}
          </div>
        </li>

        <li className='navbar__list cart-wishlist pointer'>
          <div className='notification-badge-container'>
            <Link to='/checkout/cart'>
              <i className='fa fa-shopping-bag'></i>
            </Link>

            {auth.token && (
              <div className='notification-badge flex-center'>
                <span>{cart.length}</span>
              </div>
            )}
          </div>
        </li>
      </ul>
      {hover && (
        <div className='profile-card' ref={wrapperRef}>
          <NavLink to='/checkout/cart'>My Cart</NavLink>
          <NavLink to='/wishlist'>My Wishlist</NavLink>
          <button className='purple-button-style' onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </>
  )
  },[auth.user, hover])
}
