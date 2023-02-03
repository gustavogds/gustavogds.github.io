import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LangChanger from "./LangChanger";
import { useTranslation } from "react-i18next";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <CustomLink to="/" className="navbar-item">
        {t("Home")}
      </CustomLink>
      <CustomLink to="/projects" className="navbar-item">
        {t("Projects")}
      </CustomLink>
      <Link to="/">
        <img alt="Gustavo" src={logo} className="navbar-logo" />
      </Link>
      <CustomLink to="/about" className="navbar-item">
        {t("About me")}
      </CustomLink>
      <span>
        <LangChanger />
      </span>
    </nav>
  );
};

export default Navbar;
