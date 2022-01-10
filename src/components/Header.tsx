import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const classes = useStyles();

  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const hamburgerHandler = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <header>
      <img className={classes.logo} src={logo} alt="logo" />
      <nav>
        <ul
          className={
            !isHamburgerActive
              ? classes.navlinks
              : `${classes.navlinks} ${classes.navlinksActive}`
          }
        >
          <li>
            <Link to="/profile">About me</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
        </ul>
        <div className={classes.hamburger} onClick={hamburgerHandler}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
      </nav>
    </header>
  );
}

const useStyles = makeStyles({
  "@global": {
    "li, a": {
      fontFamily: "sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      color: "#edf0f1",
      textDecoration: "none",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "30px 10%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  },
  logo: {
    height: "60px",
  },
  navlinks: {
    listStyle: "none",
    "& li": {
      display: "inline-block",
      padding: "0px 40px",
      "& a": {
        transition: "all 0.3s ease 0s",
        "&:hover": {
          color: "rgba(0, 0, 0, 1)",
        },
      },
    },
  },
  navlinksActive: {},
  hamburger: {
    display: "none",
  },
  bar: {
    display: "block",
    width: "25px",
    height: "3px",
    margin: "5px auto",
    WebkitTransition: "all 0.3s ease-in-out",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "#101010",
  },
  "@media only screen and (max-width: 768px)": {
    navlinks: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "0px",
      margin: "0px",
      left: "100%",
      zIndex: "1",
      top: "120px",
      "& li": {
        margin: "2.5rem 0",
      },
    },
    navlinksActive: {
      left: "0%",
    },
    hamburger: {
      display: "block",
      cursor: "pointer",
    },
  },
});
