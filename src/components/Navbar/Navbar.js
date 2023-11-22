// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserShield } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  Icon,
  MobileIcon,
  NavbarMenu,
  NavbarItems,
  NavbarLink,
  NavbarButtonOne,
  NavbarButtonTwo,
  NavbarButtonLink
} from './NavbarStyling';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/'>
            <Icon><FaUserShield size={45} /></Icon>CROWD-CARE
          </NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItems>
              <NavbarLink to='/home'>Home</NavbarLink>
            </NavbarItems>
            <NavbarItems>
              <NavbarLink to='/about'>About Us</NavbarLink>
            </NavbarItems>
            <NavbarItems>
              <NavbarLink to='/services'>Our Services</NavbarLink>
            </NavbarItems>
            <NavbarItems>
              <NavbarLink to='/contact'>Contact Us</NavbarLink>
            </NavbarItems>
            <NavbarItems>
              <Link to='/login'>
                <NavbarButtonOne>Sign In</NavbarButtonOne>
              </Link>
            </NavbarItems>
            <NavbarItems>
              <Link to='/signup'>
                <NavbarButtonTwo>Sign Up</NavbarButtonTwo>
              </Link>
            </NavbarItems>
          </NavbarMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;