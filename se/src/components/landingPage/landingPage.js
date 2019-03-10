import React from 'react';
import { Nav, NavItem, Navbar, NavLink, NavbarBrand,Container, Row, Col } from 'reactstrap';
export default function LandingPage(props) {
    return (
      <div>
       
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src="https://bobandsuewilliams.com/images/nova-logo-4.jpg" width = "10%" alt=""/></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>Sign in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Sign up</NavLink>
            </NavItem>
         </Nav>
         </Navbar>
        <Container>
            <Row></Row>
         </Container>
         </div>
    );
}