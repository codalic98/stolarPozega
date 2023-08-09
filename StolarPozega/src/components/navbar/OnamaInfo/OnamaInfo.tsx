import "./onamainfo.css";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
const OnamaInfo = () => {
  return (
    <>
      <Container style={{ marginTop: "66px" }} className="desc">
        <MDBCard style={{ maxWidth: "100%", border: "none" }}>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/6663/6663877.png"
                alt="..."
                style={{ maxWidth: "100%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1>O nama</h1>
                  Mi smo mlada i dinamična kompanija koja je osnovana 2010.
                  godine sa strašću za proizvodnjom nameštaja koji će uneti
                  radost i udobnost u domove naših kupaca. Od samog početka,
                  posvećeni smo kvalitetu, inovacijama i jedinstvenom dizajnu,
                  što nas je učinilo jednim od omiljenih izbora među
                  ljubiteljima nameštaja.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="5" style={{ textAlign: "center" }}></MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1> Vizija</h1>
                  Želimo da svaki dom bude poseban i da svaki komad nameštaja
                  ima svoju priču. Stvaramo nameštaj koji odražava ličnost i
                  stil naših klijenata, čineći njihov životni prostor unikatnim
                  i inspirativnim.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/4860/4860854.png"
                alt="..."
                style={{ maxWidth: "100%" }}
                fluid
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/7851/7851084.png"
                alt="..."
                style={{ maxWidth: "100%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1> Misija</h1>
                  Naša misija je pružiti vrhunski nameštaj po pristupačnim
                  cenama, bez kompromisa po pitanju kvaliteta. S ponosom
                  proizvodimo naše komade u našem savremenom pogonu, koristeći
                  pažljivo odabrane materijale i iskusne majstore. Naš tim
                  stručnjaka pažljivo nadgleda svaki korak proizvodnog procesa
                  kako bismo garantovali izuzetnost naših proizvoda.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="5" style={{ textAlign: "center" }}></MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1> Proizvodi</h1>
                  Naša kolekcija nameštaja obuhvata širok spektar stilova i
                  funkcionalnosti. Bilo da tražite moderni minimalizam, rustičnu
                  toplinu ili klasičnu eleganciju, imamo nešto za svakoga. Od
                  kauča i stolica do komoda i kreveta, svaki komad je pažljivo
                  dizajniran da ispuni potrebe i estetske želje naših kupaca.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/4392/4392541.png"
                alt="..."
                style={{ maxWidth: "100%" }}
                fluid
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/4593/4593624.png"
                alt="..."
                style={{ maxWidth: "100%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1>Zašto Izabrati Nas</h1>
                  Kao nezavisna firma bez partnerstva, imamo potpunu kontrolu
                  nad svim aspektima proizvodnje. To nam omogućava da brzo
                  reagujemo na potrebe tržišta i da isporučimo nameštaj koji je
                  stvoren s ljubavlju i pažnjom. Naše zadovoljne mušterije su
                  naša najveća preporuka, a njihova sreća i zadovoljstvo našim
                  proizvodima motivišu nas da idemo napred.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Container>
      {/*  */}
      <Container style={{ marginTop: "30px" }} className="phone">
        <MDBCard style={{ maxWidth: "100%", border: "none" }}>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/6663/6663877.png"
                alt="..."
                style={{ maxWidth: "50%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1>O nama</h1>
                  Mi smo mlada i dinamična kompanija koja je osnovana 2010.
                  godine sa strašću za proizvodnjom nameštaja koji će uneti
                  radost i udobnost u domove naših kupaca. Od samog početka,
                  posvećeni smo kvalitetu, inovacijama i jedinstvenom dizajnu,
                  što nas je učinilo jednim od omiljenih izbora među
                  ljubiteljima nameštaja.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/4860/4860854.png"
                alt="..."
                style={{ maxWidth: "50%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="5" style={{ textAlign: "center" }}></MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1> Vizija</h1>
                  Želimo da svaki dom bude poseban i da svaki komad nameštaja
                  ima svoju priču. Stvaramo nameštaj koji odražava ličnost i
                  stil naših klijenata, čineći njihov životni prostor unikatnim
                  i inspirativnim.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/7851/7851084.png"
                alt="..."
                style={{ maxWidth: "50%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1> Misija</h1>
                  Naša misija je pružiti vrhunski nameštaj po pristupačnim
                  cenama, bez kompromisa po pitanju kvaliteta. S ponosom
                  proizvodimo naše komade u našem savremenom pogonu, koristeći
                  pažljivo odabrane materijale i iskusne majstore. Naš tim
                  stručnjaka pažljivo nadgleda svaki korak proizvodnog procesa
                  kako bismo garantovali izuzetnost naših proizvoda.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/4392/4392541.png"
                alt="..."
                style={{ maxWidth: "50%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="5" style={{ textAlign: "center" }}></MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1> Proizvodi</h1>
                  Naša kolekcija nameštaja obuhvata širok spektar stilova i
                  funkcionalnosti. Bilo da tražite moderni minimalizam, rustičnu
                  toplinu ili klasičnu eleganciju, imamo nešto za svakoga. Od
                  kauča i stolica do komoda i kreveta, svaki komad je pažljivo
                  dizajniran da ispuni potrebe i estetske želje naših kupaca.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBRow className="g-0">
            <MDBCol md="3" style={{ textAlign: "center" }}>
              <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/256/4593/4593624.png"
                alt="..."
                style={{ maxWidth: "50%" }}
                fluid
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px", fontWeight: "400" }}>
                  <h1>Zašto Izabrati Nas</h1>
                  Kao nezavisna firma bez partnerstva, imamo potpunu kontrolu
                  nad svim aspektima proizvodnje. To nam omogućava da brzo
                  reagujemo na potrebe tržišta i da isporučimo nameštaj koji je
                  stvoren s ljubavlju i pažnjom. Naše zadovoljne mušterije su
                  naša najveća preporuka, a njihova sreća i zadovoljstvo našim
                  proizvodima motivišu nas da idemo napred.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Container>
    </>
  );
};

export default OnamaInfo;
