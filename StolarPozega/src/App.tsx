import "./App.css";
import Pocetna from "./Pages/Home/Pocetna";
import NavBar from "./components/navbar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/navbar/footer/Footer";
import Proizvodi from "./Pages/Photos/Proizvodi";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Pocetna />,
  },
  {
    path: "/proizvodi",
    element: <Proizvodi />,
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
