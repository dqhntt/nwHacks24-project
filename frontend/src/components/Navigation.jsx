import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as Icon from "react-bootstrap-icons";

export default function Navigation({ userAvatar }) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="\">TaskTrover</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Leaderboards">Leaderboard</Nav.Link>
              <Nav.Link href="/Rewards">Rewards</Nav.Link>
              <Nav.Link href="/Settings">Settings</Nav.Link>
              <Nav.Link href="https://github.com/dqhntt/nwHacks24-project">
                GitHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Row>
              <Col xs={6} md={4}>
                <Icon.Plus color="black" size={33} />
              </Col>
              <Col xs={6} md={4}>
                <Icon.Person color="black" size={30} />
              </Col>
              <Col xs={6} md={4}>
                <Image src={userAvatar} width="30px" roundedCircle />
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
