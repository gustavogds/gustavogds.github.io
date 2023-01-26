import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo1.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Toggler from "./Toggler";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

const Navbar = ({language, handleClick}) => {
  return <nav className="navbar">
    <CustomLink to="/" className="navbar-item">
        Home
    </CustomLink>
    <CustomLink to="/projects" className="navbar-item">
        Projects
    </CustomLink>
    <Link to="/">
        <img alt="Gustavo" src={logo} className="navbar-logo"/>
    </Link>
    <CustomLink to="/about" className="navbar-item">
        About me
    </CustomLink>
    <li >
        <Toggler language={language} handleClick={handleClick}/>
    </li>
  </nav>
}

export default Navbar;
