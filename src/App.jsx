import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import CrearRuta from "./pages/CrearRuta"
import DetallesRuta from "./pages/DetallesRuta"
import Rutas from "./pages/Rutas"
import RutasProvincia from "./pages/RutasProvincia"
import UserProfile from "./pages/UserProfile"
import UserRutas from "./pages/UserRutas"
import UserRutasFav from "./pages/UserRutasFav"
import Error404 from "./pages/error/Error404"
import Error500 from "./pages/error/Error500"
import NavbarComp from "./components/NavbarComp"
import Footer from "./components/Footer"

function App() {

  return (
  <div>
    <NavbarComp />

    <Routes>
      <Route path={"/"} element={<Homepage />}/>
      <Route path={"/crear-ruta"} element={<CrearRuta />}/>
      <Route path={"/detalles-ruta"} element={<DetallesRuta />}/>
      <Route path={"/rutas"} element={<Rutas />}/>
      <Route path={"/rutas-provincia"} element={<RutasProvincia />}/>
      <Route path={"/profile"} element={<UserProfile />}/>
      <Route path={"/user-rutas"} element={<UserRutas />}/>
      <Route path={"/user-rutas-fav"} element={<UserRutasFav />}/>

      <Route path={"/about"} element={<About />}/>

      <Route path={"/error500"} element={<Error500 />}/>
      <Route path={"*"} element={<Error404 />}/>


    </Routes>

    <Footer />

  </div>
  )
}

export default App
