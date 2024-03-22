import React from "react";
import { useNavigate } from "react-router-dom";
import btnAtras from "../assets/btn-atras.png";
import logoGitHub from "../assets/GitHub-logo.png";
import linkedin from "../assets/linkedin.png";

function About() {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);
    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>
            <h1>Ciclocero</h1>
            <div className="parrafo-about">
                <p>
                    <strong>Ciclocero</strong> es una plataforma diseñada por
                    Francisco Estepa y Pablo Sánchez, estudiantes de Web Dev en
                    Ironhack, para su proyecto final de Bootcamp. Esta
                    plataforma está creada para entusiastas del ciclismo que
                    buscan explorar nuevas rutas y compartir experiencias con
                    otros usuarios de la comunidad ciclista. Con Ciclocero, los
                    usuarios pueden crear, descubrir y compartir sus rutas
                    favoritas para bicicleta, junto con descripciones
                    detalladas, información sobre modalidad, distancias,
                    reseñas, fotos y puntos de interés en el camino. Para
                    plasmar la información hemos creado un{" "}
                    <a href="https://github.com/PabloSanchezCamara/ciclocero-server-project">
                        servidor backend
                    </a>{" "}
                    donde almacenamos la información de los distintos modelos
                    (rutas, reseñas y usuarios), y las distintas rutas que hemos
                    usado, tanto de verificación de usuarios como recibir
                    información.
                </p>
                <p>
                    Toda la App ha sido desarrollada con con herramientas de
                    React, JavaScript, CSS, Node, Express, además de las
                    librerias de{" "}
                    <a href="https://react-leaflet.js.org/">Leaflet</a>,{" "}
                    <a href="https://www.react-simple-maps.io/">
                        react-simple-maps
                    </a>
                    , <a href="https://cloudinary.com/">Cloudinary</a>,{" "}
                    <a href="https://www.davidhu.io/react-spinners/">
                        REACT SPINNERS by David Hu
                    </a>
                    ,{" "}
                    <a href="https://react-bootstrap.netlify.app/">Bootstrap</a>{" "}
                    y{" "}
                    <a href="https://www.npmjs.com/package/react-burger-menu">
                        react-burger-menu
                    </a>
                </p>

                <h3>Características Principales:</h3>

                <ul>
                    <li>
                        <strong>Crear Rutas Personalizadas:</strong> Los
                        usuarios pueden trazar sus propias rutas de ciclismo
                        utilizando herramientas interactivas de mapas,
                        definiendo puntos de inicio, fin y puntos intermedios.
                    </li>

                    <li>
                        <strong>Descripciones Detalladas:</strong> Cada ruta
                        puede estar acompañada de descripciones detalladas que
                        incluyen información sobre terreno, dificultad,
                        atracciones locales y recomendaciones.
                    </li>

                    <li>
                        <strong>Modalidad de Ruta:</strong> Los usuarios pueden
                        especificar la modalidad de la ruta, ya sea carretera,
                        montaña, urbana, gravel, etc., para ayudar a otros
                        ciclistas a encontrar rutas adecuadas para sus
                        preferencias.
                    </li>

                    <li>
                        <strong>Distancias y Elevación:</strong> Se proporciona
                        información precisa sobre la distancia total de la ruta
                        y los cambios de elevación para que los ciclistas puedan
                        planificar sus viajes de manera adecuada.
                    </li>

                    <li>
                        <strong>Reseñas y Comentarios:</strong> Los usuarios
                        pueden dejar reseñas y comentarios sobre las rutas que
                        han explorado, compartiendo sus experiencias, fotos,
                        consejos y recomendaciones con la comunidad.
                    </li>

                    <li>
                        <strong>Perfil de Usuario Personalizado:</strong> Cada
                        usuario tiene su propio perfil personalizado donde
                        pueden ver las rutas que han creado, las rutas guardadas
                        en favoritos, así como las reseñas y comentarios que han
                        dejado en otras rutas.
                    </li>

                    <li>
                        <strong>Comunidad Activa:</strong> Ciclocero fomenta la
                        interacción entre los usuarios, creando una comunidad
                        activa de ciclistas que comparten su pasión por el
                        ciclismo y se ayudan mutuamente a descubrir nuevas rutas
                        y mejorar sus experiencias en bicicleta.
                    </li>
                </ul>

                <p>
                    Con <strong>Ciclocero</strong>, los amantes del ciclismo
                    pueden explorar el mundo sobre dos ruedas, descubrir nuevas
                    aventuras y conectar con una comunidad apasionada por el
                    ciclismo, todo desde una plataforma centralizada diseñada
                    para satisfacer sus necesidades y facilitar su pasión por
                    pedalear.
                </p>
            </div>
            <div>
                <h2>Nuestros Perfiles:</h2>
                <div className="nombres-about">
                    <div>
                        <h2>Pablo</h2>
                        <div className="enlaces-about">
                            <a href="https://github.com/PabloSanchezCamara">
                                <img
                                    src={logoGitHub}
                                    alt="logo-github"
                                    width={"50px"}
                                />
                            </a>{" "}
                            {" "}
                            <a href="https://www.linkedin.com/in/pablo-sanchez-camara-b143892b4/">
                                {" "}
                                <img
                                    src={linkedin}
                                    alt="logo-linkedin"
                                    width={"35px"}
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2>Fran</h2>
                        <div className="enlaces-about">
                            <a href="https://github.com/fraestgue">
                                {" "}
                                <img
                                    src={logoGitHub}
                                    alt="logo-github"
                                    width={"50px"}
                                />
                            </a>{" "}
                            {" "}
                            <a href="https://www.linkedin.com/in/francisco-estepa-guerra-400417163/">
                                {" "}
                                <img
                                    src={linkedin}
                                    alt="logo-linkedin"
                                    width={"35px"}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
