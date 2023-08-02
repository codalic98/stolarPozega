import React from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Pagination,
} from "react-bootstrap";
import "./Gallery.css"; // Import the CSS with the hover-zoom class

const Gallery = () => {
  const [activePage, setActivePage] = React.useState(1); // State to keep track of the active page

  const imagesPerPage = 4; // Number of images per page
  const totalImages = 8; // Replace this with the actual total number of images
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setActivePage(pageNumber);
  };

  // Array to simulate images. Replace these with your image URLs.
  const images = Array.from({ length: totalImages }, (_, index) => ({
    id: index + 1,
    src: `https://johnlewis.scene7.com/is/image/JohnLewis/homeandgarden-gardenfurniture-dyson-block-gb-260623?$cms-max-image-threshold$&wid=768&fit=hfit,1
    }`,
  }));

  // Function to get images for the current active page
  const getImagesForPage = () => {
    const startIndex = (activePage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return images.slice(startIndex, endIndex);
  };

  return (
    <>
      <Container>
        <br />
        <br />
        <Row>
          <Col
            xs={3}
            style={{
              height: "auto",
            }}
          >
            <ListGroup>
              <ListGroupItem href="#link1">Stolice</ListGroupItem>
              <ListGroupItem href="#link2">Stolovi</ListGroupItem>
              <ListGroupItem href="#link3">Kreveti</ListGroupItem>
            </ListGroup>
          </Col>

          <Col
            style={{
              height: "550px",
            }}
          >
            <Row>
              {getImagesForPage().map((image) => (
                <Col key={image.id} className="hover-zoom">
                  <img
                    className="Image"
                    src={image.src}
                    alt=""
                    style={{ height: "220px" }}
                  />
                </Col>
              ))}
            </Row>
            <br />
            <Row>
              {getImagesForPage().map((image) => (
                <Col key={image.id} className="hover-zoom">
                  <img
                    className="Image"
                    src={image.src}
                    alt=""
                    style={{ height: "220px" }}
                  />
                </Col>
              ))}
            </Row>
            <Row className="mt-3">
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Pagination>
                  <Pagination.Prev
                    onClick={() => handlePageChange(activePage - 1)}
                    disabled={activePage === 1}
                  />
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === activePage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => handlePageChange(activePage + 1)}
                    disabled={activePage === totalPages}
                  />
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Add the pagination component below the image gallery */}
      </Container>
    </>
  );
};

export default Gallery;
