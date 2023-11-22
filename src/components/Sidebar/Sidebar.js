// Sidebar.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarStyling';

/* Creates website navigation sidebar to be used in minimized screen or mobile dimensions. */ 
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/about' onClick={toggle}>About Us</SidebarLink>
            <SidebarLink to='/services' onClick={toggle}>Our Services</SidebarLink>
            <SidebarLink to='/contact' onClick={toggle}>Contact Us</SidebarLink>
          </SidebarMenu>                
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;