import CorouselPocetna from "../../components/navbar/CorouselPocetna/CorouselPocetna";
import Onama from "../../components/navbar/Onama/Onama";
import TreeColl from "../../components/navbar/TreeColl/TreeColl";
// import Usluge from "../../components/navbar/Usluge/Usluge";
import "./pocetna.css";
const Pocetna = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <CorouselPocetna />
      <TreeColl />
      {/* <Usluge /> */}

      <Onama />
    </>
  );
};

export default Pocetna;
