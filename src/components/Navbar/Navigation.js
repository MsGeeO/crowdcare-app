import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

/* Creates alternative navigation for pages that don't require full topbar action. */
const NavigationBar = () => {
  return (
    <Navbar bg="#e6e6e6" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon
            icon={faUserShield}
            style={{
              color: '#000080',
              fontSize: '50px',
              marginLeft: '35px',
              marginTop: '15px',
              marginBottom: '18px',
              verticalAlign: 'middle'
            }}
          />
          <span
            style={{
              color: '#000080',
              fontSize: '35px',
              fontWeight: 'bolder',
              padding: '6px',
              verticalAlign: 'middle'
            }}
          >
            CROWD-CARE
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;