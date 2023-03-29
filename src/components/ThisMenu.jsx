import { pushRotate as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

export default () => {
  return (
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <NavLink  className="menu-item--small "
          ><img className="hover" id="Engelska" src="https://media.istockphoto.com/id/542201926/sv/foto/british-flag-button-flag-of-the-uk-badge.jpg?s=170667a&w=0&k=20&c=XAfL44CtyLd_AM5upHiVHt9RtlJyC2oljUzrA6efv68=" alt="" height="30px" /></NavLink>
        <NavLink to={"/"} id="Home" className="menu-item"          
        >
          Hem
        </NavLink>
        <NavLink to={"/apartment"} id="Apartment" className="menu-item" >
          Lägenheten
        </NavLink>
        <NavLink to={"/photos"} id="Photos" className="menu-item" >
          Bilder
        </NavLink>
        <NavLink to={"/settings"} id="Settings" className="menu-item" >Settings</NavLink>
      </Menu>
    );
  }