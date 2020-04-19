import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

class NavBar extends Component {
  render() {
    const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 776 });
      return isDesktop ? children : null;
    };
    const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 775 });
      return isMobile ? children : null;
    };
    return (
      <React.Fragment>
        <Desktop>
          <NavBarDesktop />
        </Desktop>
        <Mobile>
          <NavBarMobile />
        </Mobile>
      </React.Fragment>
    );
  }
}

export default NavBar;
