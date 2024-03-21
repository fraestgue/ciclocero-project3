import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import CrearRuta from "./pages/CrearRuta";
import DetallesRuta from "./pages/DetallesRuta";
import Rutas from "./pages/Rutas";
import RutasProvincia from "./pages/RutasProvincia";
import UserProfile from "./pages/UserProfile";
import UserRutas from "./pages/UserRutas";
import Error404 from "./pages/error/Error404";
import Error500 from "./pages/error/Error500";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import { AuthContext } from "./context/auth.context";
import { useContext, useState } from "react";
import AccessPage from "./pages/AccessPage";

function App() {
    const { isLoggedIn, loggedUserId } = useContext(AuthContext);
    console.log(loggedUserId);

    return (
        <div>
            <NavbarComp />

            <div className="pagina">
                <Routes>
                    <Route
                        path={"/"}
                        element={
                            isLoggedIn === true ? <Homepage /> : <AccessPage />
                        }
                    />
                    <Route
                        path={"/crear-ruta"}
                        element={isLoggedIn === true && <CrearRuta />}
                    />
                    <Route
                        path={"/rutas/:rutaId"}
                        element={
                            isLoggedIn === true && (
                                <DetallesRuta loggedUserId={loggedUserId} />
                            )
                        }
                    />
                    <Route
                        path={"/rutas"}
                        element={isLoggedIn === true && <Rutas />}
                    />
                    <Route
                        path={"/rutas/provincia/:provincia"}
                        element={isLoggedIn === true && <RutasProvincia />}
                    />
                    <Route
                        path={"/profile"}
                        element={isLoggedIn === true && <UserProfile />}
                    />
                    <Route
                        path={"/user-rutas"}
                        element={
                            isLoggedIn === true && (
                                <UserRutas loggedUserId={loggedUserId} />
                            )
                        }
                    />

                    <Route path={"/about"} element={<About />} />

                    <Route path={"/error500"} element={<Error500 />} />
                    <Route path={"*"} element={<Error404 />} />
                </Routes>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default App;
