import React, { useEffect, useState } from "react";
import { Dropdown, Space, Image } from "antd";
import { Link, NavLink } from "react-router-dom";
import { headerLinks } from "../Data/Constant";
import SVGIcons from "../Data/SVGIcons";
import BuildingLogo from "../../assets/images/icons/building.png";
import Logo from "../../assets/images/logo/header-logo.svg";
import {
  Container,
  HeaderNavbar,
  HeaderNavigation,
  NotificationWrap,
  HeaderLogo,
  HeaderNavItem,
  NotificationItem,
  DropdownLink,
  ToggleButton,
  HamburgerLine,
  ResponsiveStyle,
} from "./HeaderStyledComponent";

const Header = () => {
  const [userState, setUserState] = useState(false);
  const [activeLink, setActiveLink] = useState("reservation");
  const [selectedProperty, setSelectedProperty] = useState({
    id: 824356,
    name: "Royal Beach Reas...",
  });

  const properties = [
    { id: 824356, name: "Royal Beach Resort" },
    { id: 912345, name: "Seaside Villas" },
    { id: 789012, name: "Mountain Lodge" },
  ];

  const items = properties.map((property) => ({
    key: property.id,
    label: (
      <Space>
        {property.name} ({property.id})
      </Space>
    ),
  }));

  const handleMenuClick = ({ key }) => {
    const selected = properties.find(
      (property) => property.id.toString() === key
    );
    setSelectedProperty(selected);
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.getElementById("header");
      const spaceTop = document.querySelector(".header-space");
      spaceTop.style.paddingTop = `${headerElement.offsetHeight}px`;
    };

    updateHeaderHeight();

    const handleResize = () => {
      updateHeaderHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    const body = document.querySelector("html");
    setUserState(!userState);
    body.classList.toggle("show-menu");
  };

  return (
    <>
      <ResponsiveStyle />
      <Container id="header">
        <HeaderNavbar>
          <HeaderLogo>
            <Link to="/">
              <Image preview={false} src={Logo} />
            </Link>
          </HeaderLogo>
          <HeaderNavigation>
            <HeaderNavItem id="navigation">
              {headerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    className={
                      activeLink === link.id ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setActiveLink(link.id)}
                  >
                    <span className="header-navlink-iconwrap">
                      {link.label}
                    </span>
                    <span className="header-navlink-name">{link.id}</span>
                  </Link>
                </li>
              ))}
            </HeaderNavItem>
            <NotificationWrap>
              <NotificationItem>
                <NavLink className="email">{SVGIcons.Email}</NavLink>
              </NotificationItem>
              <NotificationItem>
                <NavLink className="notification">
                  {SVGIcons.Notification}
                </NavLink>
              </NotificationItem>
            </NotificationWrap>
            <Dropdown menu={{ items, onClick: handleMenuClick }}>
              <DropdownLink>
                <Space>
                  <img src={BuildingLogo} alt="Building Logo" />
                  <div>
                    <span className="property-name">
                      {selectedProperty.name}
                    </span>
                    <span className="property-id">{selectedProperty.id}</span>
                  </div>
                  <span>{SVGIcons.DownArrow}</span>
                </Space>
              </DropdownLink>
            </Dropdown>
          </HeaderNavigation>
          <ToggleButton
            className="hamburger toggle-btn"
            id="hamburger"
            onClick={toggleMenu}
          >
            <HamburgerLine />
          </ToggleButton>
        </HeaderNavbar>
      </Container>
      <div className="header-space"></div>
    </>
  );
};

export default Header;
