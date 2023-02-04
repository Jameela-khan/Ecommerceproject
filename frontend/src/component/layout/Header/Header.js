import React from "react";
import "./Header.css";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo2.png";

const options = {
  burgerColor: "red",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "15vmax",
  logoHeight: "14vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Product",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "black",
  // searchIcon : true,
  searchIconUrl : "/search",
  searchIconSize :	"2vmax",
  cartIconUrl : "/cart",
  cartIconSize :	"2vmax",
  profileIconSize:	"2.5vmax",
  searchIconColor: "black",
  // cartIcon : true,
  cartIconColor: "black",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};


export default Header
