import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 navbar-fixed"
        >
          <Container fluid className="container">
            <NavbarBrand href="/" style={{ fontSize: "30px" }}>
              Stolar Požega
            </NavbarBrand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setOffcanvasOpen(!offcanvasOpen)}
            />
            <Navbar.Offcanvas
              show={offcanvasOpen}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton onClick={closeOffcanvas} />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to={"/"} className="links" onClick={closeOffcanvas}>
                    Početna
                  </NavLink>
                  <NavLink
                    to={"/proizvodi"}
                    className="links"
                    onClick={closeOffcanvas}
                  >
                    Proizvodi
                  </NavLink>
                  <NavLink
                    to={{ pathname: "o-nama" }}
                    className="links"
                    onClick={closeOffcanvas}
                  >
                    O nama
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
