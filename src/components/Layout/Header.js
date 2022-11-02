import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

import mealsBackground from "../../assets/background.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>{props.title}</h1>
        <HeaderCartButton title="Your Cart" onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsBackground} alt="Here You Can Order What You Desire!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
