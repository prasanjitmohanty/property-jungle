/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";


export default function Layout(props) {
  const title = "Property Jungle";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        /> */}
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
          `}
        </style>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Property Jungle
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="For Sale" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Plots in Bhubaneswar</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Plots in Cuttack</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Plots in Rourkela</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">News and Guides</Nav.Link>
                <NavDropdown title="Services" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Legal</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Verification</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Registration</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/login">Sign In</Nav.Link>
                <Nav.Link eventKey={2} href="/property">
                  Post Property
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar >

      </header >
      <br/>
      <Container>{props.children}</Container>
    </div >
  );
}