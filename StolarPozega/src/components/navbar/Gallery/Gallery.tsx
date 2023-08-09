import React, { useEffect } from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Pagination,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./gallery.css"; // Import the CSS with the hover-zoom class

const Gallery = () => {
  const [activePage, setActivePage] = React.useState(1); // State to keep track of the active page

  const imagesPerPage = 4; // Number of images per page
  const totalImages = 8; // Replace this with the actual total number of images
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // State to keep track of the number of images per row
  const [imagesPerRow, setImagesPerRow] = React.useState(4);

  // Use media query to update imagesPerRow based on screen width
  const isSmallScreen1 = useMediaQuery({ query: "(max-width: 532px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 992px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1200px)" });

  // Update imagesPerRow when screen width changes
  useEffect(() => {
    if (isSmallScreen1) {
      setImagesPerRow(2);
    } else if (isMediumScreen) {
      setImagesPerRow(3);
    } else if (isSmallScreen) {
      setImagesPerRow(3);
    } else {
      setImagesPerRow(4);
    }
  }, [isSmallScreen, isMediumScreen, isSmallScreen1]);

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
      <Container className="desc">
        <br />
        <Row>
          <Col xs={3} style={{ height: "auto" }}>
            <ListGroup>
              <ListGroupItem href="#link1">Stolice</ListGroupItem>
              <ListGroupItem href="#link2">Stolovi</ListGroupItem>
              <ListGroupItem href="#link3">Kreveti</ListGroupItem>
            </ListGroup>
          </Col>

          <Col>
            <Row>
              {getImagesForPage().map((image) => (
                <Col
                  key={image.id}
                  className="hover-zoom"
                  xs={12 / imagesPerRow}
                >
                  <img
                    className="Image"
                    src={image.src}
                    alt=""
                    style={{ height: "220px", width: "100%" }}
                  />
                </Col>
              ))}
              {getImagesForPage().map((image) => (
                <Col
                  key={image.id}
                  className="hover-zoom"
                  xs={12 / imagesPerRow}
                >
                  <img
                    className="Image"
                    src={image.src}
                    alt=""
                    style={{ height: "220px", width: "100%" }}
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

      <Container className="phone">
        <br />
        <Col style={{ height: "auto" }}>
          <nav className="nav d-flex flex-nowrap overflow-auto justify-content-between">
            <a className="nav-link" href="#">
              Stolice
            </a>
            <a className="nav-link" href="#">
              Stolovi
            </a>
            <a className="nav-link" href="#">
              Kreveti
            </a>
            <a className="nav-link" href="#">
              Brvnare
            </a>
            <a className="nav-link" href="#">
              Ormari
            </a>
          </nav>
        </Col>
        <br />
        <Row>
          <Col>
            <Row>
              {getImagesForPage().map((image) => (
                <Col
                  key={image.id}
                  className="hover-zoom"
                  xs={12 / imagesPerRow}
                >
                  <img
                    className="Image"
                    src={image.src}
                    alt=""
                    style={{ height: "200px", width: "100%" }}
                  />
                </Col>
              ))}
              {getImagesForPage().map((image) => (
                <Col
                  key={image.id}
                  className="hover-zoom"
                  xs={12 / imagesPerRow}
                >
                  <img
                    className="Image"
                    src={image.src}
                    alt=""
                    style={{ height: "200px", width: "100%" }}
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
