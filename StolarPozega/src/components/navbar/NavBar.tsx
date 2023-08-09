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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to={"/"} className="links">
                    Početna
                  </NavLink>
                  <NavLink to={"/proizvodi"} className="links">
                    Proizvodi
                  </NavLink>
                  <NavLink
                    to={{ pathname: "/", hash: "o-nama" }}
                    className="links"
                  >
                    O nama
                  </NavLink>
                  <NavLink
                    to={{ pathname: "/", hash: "kontakt" }}
                    className="links"
                  >
                    Kontakt
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
