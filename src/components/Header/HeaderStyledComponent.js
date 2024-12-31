import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.header`
  position: fixed;
  background: var(--white);
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 10px 16px;
  width: 100%;
  box-shadow: 0px 2px 4px 0px #00000029;
  @media screen and (max-width: 767px) {
    padding: 8px 16px;
  }
`;

export const HeaderNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NotificationWrap = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding-right: 16px;
  border-right: 1px solid #e6e6e6;
  @media screen and (max-width: 575px) {
    margin-left: 10px;
    padding-right: 12px;
  }
`;

export const HeaderLogo = styled.div`
  width: 168px;
  height: auto;
  z-index: 5;

  .ant-image {
    display: block;
  }
  @media screen and (max-width: 991px) {
    width: 150px;
  }
  @media screen and (max-width: 767px) {
    width: 120px;
  }
  @media screen and (max-width: 575px) {
    width: 100px;
  }
  @media screen and (max-width: 414px) {
    width: 80px;
  }
`;

export const HeaderNavItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  border-right: 1px solid #e6e6e6;

  li:not(:last-child) {
    margin-right: 4px;
  }

  .nav-link {
    display: flex;
    align-items: center;
    text-transform: capitalize;

    .header-navlink-name {
      display: none;
    }

    .header-navlink-iconwrap {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 10px;
      color: var(--black);
      background-color: var(--white);
    }

    &.active .header-navlink-iconwrap {
      background-color: var(--light-white-tint);
      color: var(--blue);
    }
  }
  @media only screen and (max-width: 991px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    overflow: auto;
    text-align: center;
    z-index: 3;
    height: 100vh;
    display: block;
    padding: 100px 30px 30px;
    background-color: var(--black);
    transition: all 0.7s ease 0s;
    transform: translateX(110%);

    .show-menu & {
      transform: translateX(0%);
    }
    li:not(:last-child) {
      margin-bottom: 10px;
      margin-right: 0px;
    }
    .nav-link {
      .header-navlink-name {
        display: block;
        margin-left: 10px;
        font-size: 18px;
        color: var(--white);
      }
    }
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    padding-right: 12px;
  }
`;

export const NotificationItem = styled.li`
  &:not(:last-child) {
    margin-right: 4px;
  }
  a {
    display: flex;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 10px;

    &.email,
    &.notification {
      position: relative;
    }
    &.email::after {
      content: "9+";
    }

    &.notification::after {
      content: "2";
    }
    &.email::after,
    &.notification::after {
      position: absolute;
      right: -5px;
      top: -5px;
      padding: 4px;
      border-radius: 50%;
      background-color: var(--red);
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      font-size: 11px;
      color: var(--white);
    }
  }

  @media screen and (max-width: 767px) {
    a {
      width: 30px;
      height: 30px;
      padding: 5px;
      &.email::after,
      &.notification::after {
        padding: 4px;
        width: 10px;
        height: 10px;
        font-size: 9px;
        text-align: center;
      }
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    a {
      width: 25px;
      height: 25px;
      padding: 5px;
    }
  }
`;

export const DropdownLink = styled.div`
  margin-left: 16px;

  .property-name {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: var(--black-tint-2);
    display: block;
  }

  .property-id {
    display: block;
    color: #666666;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
  @media screen and (max-width: 575px) {
    margin-left: 10px;
    .property-name {
      width: 5ch;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
    }

    .property-id {
      font-size: 12px;
    }
    img {
      width: 20px;
      height: auto;
    }
  }
`;

export const ToggleButton = styled.div`
  line-height: normal;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 99;
  display: block;
  margin-left: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.5s ease 0s;
  display: none;
`;

export const HamburgerLine = styled.div`
  position: relative;
  width: 25px;
  height: 2px;
  background-color: var(--black);
  display: inline-block;
  vertical-align: middle;

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 17px;
    height: 2px;
    background-color: var(--black);
    right: 0;
    transition: all 0.5s;
    animation: 0.3s linear forwards openCloseByeSpan;
  }

  &::before {
    top: -7px;
  }

  &::after {
    top: 7px;
  }

  html.show-menu & {
    height: 0;
  }

  html.show-menu &::after,
  html.show-menu &::before {
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(45deg);
    top: -1px;
    background-color: var(--white);
  }

  html.show-menu &::after {
    transform: rotate(-45deg);
  }
`;

// Responsive styles for the header component to apply styles on the component elements and classes based on the screen size of the device
export const ResponsiveStyle = createGlobalStyle`
  @media screen and (max-width: 991px) {
    html.show-menu {
      overflow: hidden;
      & body{
        height: 100%;
      }
      &:after {
          content: "";
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 10;
      background-color: rgb(0 0 0 / 60%); 
      }
    }
    ${ToggleButton} { 
      display: block;
    }
}
`;
