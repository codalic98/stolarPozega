import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        id="kontakt"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4  ">
                <h4 className="text-uppercase fw-bold mb-4">
                  <a href="/">
                    <MDBIcon color="secondary" icon="gem" className="me-3" />
                    Stolar Pozega
                  </a>
                </h4>
                <div className="rounded-socials">
                  <a
                    href="https://www.facebook.com/evoplay.games"
                    className="rounded-socials_ico"
                  >
                    <img
                      src="https://evoplay.games/wp-content/themes/evoplay/assets/img/icons/facebook-gray.svg"
                      alt=""
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/evoplay.games/"
                    className="rounded-socials_ico"
                  >
                    <img
                      src="https://evoplay.games/wp-content/themes/evoplay/assets/img/icons/insta-gray.svg"
                      alt=""
                    />
                  </a>
                </div>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Kontakt</h4>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Mihaila Radulovica 23, Pozega
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  01 234 567 88
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Sva prava zadrzava, Stolar Pozega
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
