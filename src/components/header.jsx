import React, { useState } from "react";
import Logo from "../images/logo";
import RequestBtn from "./RequestInvite";
import Menu from "./Menu";
import HamburgerMenu from "react-hamburger-menu";
// import "../public/styles.css";

function Header() {

  // const styles = theme => ({
  //   root: {
  //     backgroundColor: 'blue',
  //     [theme.breakpoints.up('sm')]: {
  //       backgroundColor: 'red',
  //     },
  //   },
  // });
  const [showMenu, setShowMenu] = useState(false);
  
  function handleMenu(){
    setShowMenu(!showMenu);
  }

  return (
    <div className="navbar">
      <Logo color="#2d314d" />
      <div className="menuIcon">
        <HamburgerMenu 
          isOpen={showMenu}
          menuClicked={handleMenu}
          width={20}
          height={15}
        />
      </div>
      <ul  className="nav-links">
        <li className="hover"><a href="#">Home</a></li>
        <li className="hover"><a href="#">About</a></li>
        <li className="hover"><a href="#">Contact</a></li>
        <li className="hover"><a href="#">Blog</a></li>
        <li className="hover"><a href="#">Careers</a></li>
      </ul>
      <div className="nav-btn"><a><RequestBtn /></a></div>
      <div>{showMenu && <Menu />}</div>
    </div>
  );
}

export default Header;
