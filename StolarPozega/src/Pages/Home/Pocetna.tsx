import { useEffect } from "react";
import CorouselPocetna from "../../components/navbar/CorouselPocetna/CorouselPocetna";
import TreeColl from "../../components/navbar/TreeColl/TreeColl";
// import Usluge from "../../components/navbar/Usluge/Usluge";
import "./pocetna.css";
import OnamaInfo from "../../components/navbar/OnamaInfo/OnamaInfo";
const Pocetna = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <br />
      <br />
      <br />
      <CorouselPocetna />
      <TreeColl />
      <div id="o-nama">
        <OnamaInfo />
      </div>
    </>
  );
};

export default Pocetna;
