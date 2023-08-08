import { Col, Container, Row } from "react-bootstrap";
import "./treecoll.css";
const TreeColl = () => {
  return (
    <>
      <Container className="desc">
        <br />
        <br />
        <Row>
          <Col xs={3} style={{ color: "inherit" }}>
            <h1> Naši proizvodi</h1>
            <p>
              Upoznajte našu ekskluzivnu kolekciju proizvoda koja odiše
              vrhunskom kvalitetom i jedinstvenim dizajnom. Svaki proizvod je
              pažljivo odabran kako bi zadovoljio i najzahtevnije ukuse.
            </p>
            <a href="/proizvodi" className="linkVise">
              Pogledaj više &rarr;
            </a>
          </Col>
          <Col className="d-flex flex-nowrap overflow-auto justify-content-between">
            <img
              className="imgSlike"
              src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
              alt=""
              style={{ height: "300px" }}
            />

            <img
              className="imgSlike"
              src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
              alt=""
              style={{ height: "300px" }}
            />

            <img
              className="imgSlike"
              src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
              alt=""
              style={{ height: "300px" }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="phone">
        <br />
        <br />
        <Col>
          <Row xs={9}>
            <h1>Naši proizvodi</h1>
            <p>
              Upoznajte našu ekskluzivnu kolekciju proizvoda koja odiše
              vrhunskom kvalitetom i jedinstvenim dizajnom. Svaki proizvod je
              pažljivo odabran kako bi zadovoljio i najzahtevnije ukuse.
            </p>
            <a href="/proizvodi" className="linkVise">
              Pogledaj više &rarr;
            </a>
          </Row>
          <br />
          <Row className="d-flex flex-nowrap overflow-auto justify-content-between">
            <img
              className="imgSlike"
              src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
              alt=""
            />

            <img
              className="imgSlike"
              src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
              alt=""
            />

            <img
              className="imgSlike"
              src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
              alt=""
            />
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default TreeColl;
