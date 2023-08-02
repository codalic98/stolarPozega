import { Col, Container, Row } from "react-bootstrap";
const TreeColl = () => {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col>
          <h1>Ovde ide neki text</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            ex. Veniam natus quam, error tempora sed sint suscipit qui illum
            cumque, illo officiis eum consequuntur voluptatem fugit atque nihil
            excepturi!
          </p>
          <button>See more items</button>
        </Col>
        <Col>
          <img
            src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
            alt=""
            style={{ height: "300px" }}
          />
        </Col>
        <Col>
          <img
            src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
            alt=""
            style={{ height: "300px" }}
          />
        </Col>
        <Col>
          <img
            src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2?wid=1000&qlt=50"
            alt=""
            style={{ height: "300px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TreeColl;
