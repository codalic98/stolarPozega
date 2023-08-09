import "./App.css";
import Pocetna from "./Pages/Home/Pocetna";
import NavBar from "./components/navbar/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/navbar/footer/Footer";
import Proizvodi from "./Pages/Photos/Proizvodi";
import { useEffect } from "react";
import OnamaInfo from "./components/navbar/OnamaInfo/OnamaInfo";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Pocetna />,
//   },
//   {
//     path: "/proizvodi",
//     element: <Proizvodi />,
//   },
//   {
//     path: "/",
//     element: <Pocetna />,
//     children: [
//       {
//         path: "o-nama",
//         element: <OnamaInfo />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <Pocetna />,
//     children: [
//       {
//         path: "kontakt",
//         element: <Footer />,
//       },
//     ],
//   },
// ]);
function App() {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []);  useEffect(() => {
  useEffect(() => {
    window.scrollTo(0, 0); // Skroluj na vrh prilikom svakog renderovanja
  });

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/proizvodi" element={<Proizvodi />} />
          <Route path="o-nama" element={<OnamaInfo />} />
          <Route path="kontakt" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
