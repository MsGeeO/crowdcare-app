import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  position: sticky;
  height: 90px;
  z-index: 0;
  top: 0;
  background-color: #fff;

  @media screen and (max-width: 968px) {
    transition: 0.3s all ease;
    background-color: #000080;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 1100px;
  width: 100%;
  height: 70%;
  z-index: 1;
`;

export const NavbarLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: left;
  margin-left: 24px;
  font-size: 2rem;
  font-weight: 1000;
  color: #000080;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    color: ##000080;
  }
`;

export const Icon = styled.div`
  padding-right: 5px;
  padding-bottom: 4px;
  color: #000080;

  @media screen and (max-width: 768px) {
    color: #fff;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: ##000080;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: left;
  list-style: none;
  margin-right: 1rem;
  text-align: left;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItems = styled.li`
  font-size: 17px;
  font-weight: bolder;
  align-items: left;
  colour: #000080;
`;

export const NavbarLink = styled(LinkRouter)`
  display: flex;
  align-items: left;
  padding: 0 1rem;
  height: 100%;
  color: ##000080;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bolder;
    border-bottom: 2px solid #000080;
  }
`;

export const NavbarButtonOne = styled.nav`
  display: flex;
  margin-right: 90px;
  margin-left: 60px;
  margin-top: 0.8;
  padding-bottom: 1rem;
  border-radius: 3px;
  border: none;
  outline: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarButtonTwo = styled.nav`
  display: flex;
  margin-right: -80px;
  margin-left: -60px;
  padding-bottom: 1rem;
  padding-right: 1rem;
  border-radius: 3px;
  border: none;
  outline: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarButtonLink = styled(LinkRouter)`
  outline: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  background-color: ##000080;
  cursor: pointer;

  @media only screen and (max-width: 1440px) {
    padding: ${({ big }) => (big ? '16px 30px' : '10px 15px')};
    font-size: ${({ font }) => (font ? '16px' : '16px')};
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    padding: ${({ big }) => (big ? '12px 20px' : '10px 12px')};
    font-size: ${({ font }) => (font ? '16px' : '16px')};
    text-decoration: none;
  }

  @media only screen and (max-width: 480px) {
    padding: ${({ big }) => (big ? '10px 16px' : '8px 10px')};
    font-size: ${({ font }) => (font ? '14px' : '14px')};
    text-decoration: none;
  }
`;