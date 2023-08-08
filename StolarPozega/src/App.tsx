import "./App.css";
import Pocetna from "./Pages/Home/Pocetna";
import NavBar from "./components/navbar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/navbar/footer/Footer";
import Proizvodi from "./Pages/Photos/Proizvodi";
import OnamaInfo from "./components/navbar/OnamaInfo/OnamaInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Pocetna />,
  },
  {
    path: "/proizvodi",
    element: <Proizvodi />,
  },
  {
    path: "/#o-nama",
    element: <OnamaInfo />,
  },
]);
function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
