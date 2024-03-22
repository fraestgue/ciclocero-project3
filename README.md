# CICLOCERO

## [ Prueba la App!] ()

![App logo](/src/assets/logo.png)

## Description

Ciclocero es una plataforma diseñada por Francisco Estepa y Pablo Sánchez, estudiantes de Web Dev en Ironhack, para su proyecto final de Bootcamp. Esta plataforma está creada para entusiastas del ciclismo que
buscan explorar nuevas rutas y compartir experiencias con
otros usuarios de la comunidad ciclista. Con Ciclocero, los
usuarios pueden crear, descubrir y compartir sus rutas favoritas para bicicleta, junto con descripciones detalladas, información sobre modalidad, distancias, reseñas, fotos y puntos de interés en el camino. Para plasmar la información hemos creado un <a href="https://github.com/PabloSanchezCamara/ciclocero-server-project"> servidor backend </a> donde almacenamos la información de los distintos modelos (rutas, reseñas y usuarios), y las distintas rutas que hemos usado, tanto de verificación de usuarios como recibir información.

Toda la App ha sido desarrollada con con herramientas de React, JavaScript, CSS, Node, Express, además de las librerias de <a href="https://react-leaflet.js.org/">Leaflet</a>, <a href="https://www.react-simple-maps.io/">react-simple-maps </a>, <a href="https://cloudinary.com/">Cloudinary</a>, <a href="https://www.davidhu.io/react-spinners/"> REACT SPINNERS by David Hu </a>, <a href="https://react-bootstrap.netlify.app/">Bootstrap</a> y <a href="https://www.npmjs.com/package/react-burger-menu">react-burger-menu</a>

#### [Client Repo here]()

#### [Server Repo here]()

## Technologies, Libraries & APIs used

**Tecnologías usadas: -**

-   HTML
-   JavaScript
-   CSS
-   React
-   axios
-   Express
-   MongoDB
-   Node.js

## Librerias:

#### [Bootstrap] (https://react-bootstrap.netlify.app/)

#### [REACT SPINNERS by David Hu] (https://www.davidhu.io/react-spinners/)

## Backlog Functionalities

-   Que cuando selecciones una provincia el crear la ruta aparezca el mapa con esas coordenadas
-   Limitar las reseñas del usuario en una misma ruta
-   Sección de favoritos
-   Poder editar las rutas

# Client Structure

## User Stories

-   **404** - Cuando el usuario va a una página que no existe ve que no puede seguir navegando y se le da la opción de volver atrás
-   **500** - Cuando algo falla debido a problemas internos igualmente se le informa que puede volver a intentarlo en un corto período de tiempo
-   **homepage** Página principal, donde, una vez logeado, el usuario puede acceder a todas las rutas, o seleccionar la provincia de la cual le gustaría ver las rutas. También hay un carrusel donde aparecen rutas aleatorias.
-   **events list** -
    -   Searchbar: Podemos buscar rutas por nombre de provincia, modalidad o diificultad. Mientras busca se nos muestra un spinner.
    -   Navbar: Podemos ir al inicio clickando en el logo, también se encuentra alojado el Serachbar, podemos encontrar en el lado derecho un botón para hacer logout, y a la izquiera tenemos un menú desplegable donde podemos acceder al perfil, podemos ir al formulario de crear rutas y acceder la página donde se encuentran las rutas del usuario.
    -   Crear ruta: Podemos crear una ruta desde cero, implementando la dificultad, la modalidad y los puntos de partida y de fin de la misma.
    -   Detalles ruta: Podemos ver todos los detalles de una ruta, así como un mapa donde se traza la misma.

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)

| Path                          | Page                 | Components                                                                      | Behavior                |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------------- | ----------------------- |
| `/`                           | Homepage / AccesPage | Carrousel / TextoSinLogin, Login, Signup                                        | Home page / Access Page |
| `/rutas/:rutaId`              | DetallesRuta         | MapContainer, TileLayer, MostrarRuta, BorrarRuta, FormCrearReseña, BorrarReseña | Detalles de una ruta    |
| `/rutas`                      | Rutas                |                                                                                 | Todas las rutas         |
| `/rutas/provincia/:provincia` | RutasProvincia       |                                                                                 | Rutas por provincia     |
| `/profile`                    | UserProfile          | FormEditarUser                                                                  | Perfil del usuario      |
| `/user-rutas`                 | UserRutas            |                                                                                 | Rutas del usuario       |
| `/about`                      | About                |                                                                                 | Proyecto y creadores    |
| `/errorpage`                  | Error500             |                                                                                 | Error del servidor      |
| `*`                           | Error404             |                                                                                 | Dirección inexistente   |

## Other Components

-   NavbarComp
-   Footer
-   Pacman
-   Searchbar

## Links

### Collaborators

-   Fran Estepa
    [Github](https://github.com/fraestgue)
    [Linkedin](https://www.linkedin.com/in/francisco-estepa-guerra-400417163/)

-   Pablo Sánchez
    [Github](https://github.com/PabloSanchezCamara)
    [Linkedin](https://www.linkedin.com/in/pablo-sanchez-camara-b143892b4/)

### Project
