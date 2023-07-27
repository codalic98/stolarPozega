import "./App.css";
import Pocetna from "./Pages/Home/Pocetna";
import NavBar from "./components/navbar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/navbar/footer/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Pocetna />,
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
