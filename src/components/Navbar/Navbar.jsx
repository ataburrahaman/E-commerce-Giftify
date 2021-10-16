import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import RightNavBar from "./RightNavBar";

const category = ["giftify", "men", "women", "sneakers"];

export default function Navbar({ openHamburger, setOpenHamburger }) {
  const hamburgerClick = () => {
    setOpenHamburger((prev) => !prev);
  };
  return (
    <div className='navbar-component flex'>
      <div
        className={`hamburger-menu pointer ${openHamburger ? "click" : ""}`}
        onClick={hamburgerClick}
      >
        <span className='hamburger-menu__line'></span>
        <span className='hamburger-menu__line'></span>
        <span className='hamburger-menu__line'></span>
      </div>
      <ul
        className={`menu__mobile-none rm rm-ul-padding ${
          openHamburger ? "menu__mobile" : ""
        }`}
      >
        <NavLink to='/' key={"index1"}>
          <button
            className='sidebar__item mobile__current-category'
            onClick={hamburgerClick}
          >
            HOME
          </button>
        </NavLink>
        <NavLink to='/' key={"index2"}>
          <button
            className='sidebar__item mobile__current-category'
            onClick={hamburgerClick}
          >
            CATEGORY
          </button>
        </NavLink>
      </ul>
      <NavLink to='/' className='mobile-view'>
        <button className='sidebar__item giftify mobile-view'>giftify</button>
      </NavLink>
      <ul className='nav__category rm-ul-padding flex'>
        {category.map((item, index) => {
          return item === "giftify" ? (
            <NavLink to='/' end key={index} className='sidebar__item giftify'>
              {item}
            </NavLink>
          ) : (
            <NavLink
              to={`/products/${item}`}
              key={index}
              className='sidebar__item current-category'
            >
              {item}
            </NavLink>
          );
        })}
      </ul>
      <RightNavBar />
    </div>
  );
}
