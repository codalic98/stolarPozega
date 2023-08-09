// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./onama.css";
// import {
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";
const Onama = () => {
  return (
    <>
      {/* <Container style={{ marginTop: "15px" }} className="disc">
        <Row>
          <Col>
            <section className="cu-section">
              <div className="">
                <div className="grey-bg text-center">
                  <MDBRow className="g-0">
                    <MDBCol md="10">
                      <MDBCardBody>
                        <MDBCardImage
                          src="https://cdn-icons-png.flaticon.com/256/7636/7636754.png"
                          alt="..."
                          style={{
                            maxWidth: "30%",
                            marginLeft: "20%",
                            marginBottom: "15px",
                          }}
                          fluid
                        />{" "}
                        <MDBCardText
                          style={{
                            fontSize: "15px",
                            fontWeight: "400",
                            marginLeft: "20%",
                          }}
                        >
                          Ako imate bilo kakva pitanja ili želite da dobijete
                          više informacija o određenim komadima, slobodno nas
                          kontaktirajte. Naš tim stručnjaka je spreman da vam
                          pruži vrhunsku uslugu i odgovori na sva vaša pitanja.
                          Vaš dom je vaša priča, dopustite nam da ga zajedno
                          napišemo. Kontaktirajte nas danas i učinite svoj dom
                          još lepšim
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
            </section>
          </Col>
          <Col>
            <section className="cu-section">
              <div className="">
                <div className="grey-bg text-center">
                  <h3
                    className="section-title"
                    style={{ transform: "translate(0px,0px)", opacity: "1" }}
                  >
                    Kontaktirajte nas
                  </h3>
                  <p>
                    {" "}
                    <br />
                  </p>
                  <div className="contact-in-form-container">
                    <div className="wpcf7 js">
                      <div className="screen-reader-response">
                        <p></p>
                        <ul></ul>
                      </div>
                      <form
                        action=""
                        className="wpcf7-form mailchimp-ext-0.5.68 init"
                      >
                        <div className="contact-in-form-inner">
                          <span className="wpcf7-form-control-wrap">
                            <input
                              type="text"
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              placeholder="Tvoje ime"
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap">
                            <input
                              type="text"
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              placeholder="Tvoj email"
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap">
                            <textarea
                              className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                              placeholder="Tvoja poruka"
                            ></textarea>
                          </span>
                          <div className="cap-wrapper">
                            <div
                              id="cf7sr-64b7a04e47284"
                              className="cf7sr-g-recaptcha"
                              data-sitekey="6LezBpAaAAAAAAMzDTEuZYW_zDtnWxPYuFZ3aYri"
                            ></div>
                            <span
                              className="wpcf7-form-control-wrap cf7sr-recaptcha"
                              data-name="cf7sr-recaptcha"
                            >
                              <input
                                type="hidden"
                                name="cf7sr-recaptcha"
                                value=""
                                className="wpcf7-form-control"
                              />
                            </span>
                          </div>

                          <input
                            className="wpcf7-form-control has-spinner wpcf7-submit btn btn-primary btn-submit"
                            type="submit"
                            value="Posalji"
                          />
                        </div>
                        <div
                          className="wpcf7-response-output"
                          aria-hidden="true"
                        ></div>
                        <p>
                          <span className="wpcf7-form-control-wrap referer-page">
                            <input
                              type="hidden"
                              name="referer-page"
                              className="wpcf7-form-control wpcf7-text referer-page"
                              aria-invalid="false"
                            />
                          </span>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container> */}
      {/*  */}
      {/* <Container style={{ marginTop: "15px" }} className="phone">
        <Col>
          <Row>
            <section className="cu-section">
              <div className="">
                <div className="grey-bg text-center">
                  <MDBRow className="g-0">
                    <MDBCol md="10">
                      <MDBCardBody>
                        <MDBCardImage
                          src="https://cdn-icons-png.flaticon.com/256/7636/7636754.png"
                          alt="..."
                          style={{
                            maxWidth: "30%",
                            marginBottom: "15px",
                          }}
                          fluid
                        />{" "}
                        <MDBCardText
                          style={{
                            fontSize: "15px",
                            fontWeight: "400",
                          }}
                        >
                          Ako imate bilo kakva pitanja ili želite da dobijete
                          više informacija o određenim komadima, slobodno nas
                          kontaktirajte. Naš tim stručnjaka je spreman da vam
                          pruži vrhunsku uslugu i odgovori na sva vaša pitanja.
                          Vaš dom je vaša priča, dopustite nam da ga zajedno
                          napišemo. Kontaktirajte nas danas i učinite svoj dom
                          još lepšim
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
            </section>
          </Row>
          <Row>
            <section className="cu-section">
              <div className="grey-bg text-center">
                <h3
                  className="section-title"
                  style={{ transform: "translate(0px,0px)", opacity: "1" }}
                >
                  Kontaktirajte nas
                </h3>
                <p className="subtext">
                  Ako imate nekih pitanja osecajte se slobodno da nas
                  kontaktirate
                </p>
                <div className="contact-in-form-container">
                  <div className="wpcf7 js">
                    <div className="screen-reader-response">
                      <p></p>
                      <ul></ul>
                    </div>
                    <form
                      action=""
                      className="wpcf7-form mailchimp-ext-0.5.68 init"
                    >
                      <div className="contact-in-form-inner">
                        <span className="wpcf7-form-control-wrap">
                          <input
                            type="text"
                            size={40}
                            className="wpcf7-form-control wpcf7-text"
                            placeholder="Tvoje ime"
                          />
                        </span>
                        <span className="wpcf7-form-control-wrap">
                          <input
                            type="text"
                            size={40}
                            className="wpcf7-form-control wpcf7-text"
                            placeholder="Tvoj email"
                          />
                        </span>
                        <span className="wpcf7-form-control-wrap">
                          <textarea
                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                            placeholder="Tvoja poruka"
                          ></textarea>
                        </span>
                        <div className="cap-wrapper">
                          <div
                            id="cf7sr-64b7a04e47284"
                            className="cf7sr-g-recaptcha"
                            data-sitekey="6LezBpAaAAAAAAMzDTEuZYW_zDtnWxPYuFZ3aYri"
                          ></div>
                          <span
                            className="wpcf7-form-control-wrap cf7sr-recaptcha"
                            data-name="cf7sr-recaptcha"
                          >
                            <input
                              type="hidden"
                              name="cf7sr-recaptcha"
                              value=""
                              className="wpcf7-form-control"
                            />
                          </span>
                        </div>

                        <input
                          className="wpcf7-form-control has-spinner wpcf7-submit btn btn-primary btn-submit"
                          type="submit"
                          value="Posalji"
                        />
                      </div>
                      <div
                        className="wpcf7-response-output"
                        aria-hidden="true"
                      ></div>
                      <p>
                        <span className="wpcf7-form-control-wrap referer-page">
                          <input
                            type="hidden"
                            name="referer-page"
                            className="wpcf7-form-control wpcf7-text referer-page"
                            aria-invalid="false"
                          />
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </Row>
        </Col>
      </Container> */}
    </>
  );
};

export default Onama;
