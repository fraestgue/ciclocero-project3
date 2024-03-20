import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../service/config.service";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ClickMarker from "../components/ClickMarker";
import btnAtras from "../assets/btn-atras.png";
import FormCrearReseña from "../components/FormCrearReseña";
import BorrarReseña from "../components/BorrarReseña";
import MarcarPuntosRuta from "../components/MarcarPuntosRuta";
import MostrarRuta from "../components/MostrarRuta";
import BorrarRuta from "../components/BorrarRuta";

function DetallesRuta({ loggedUserId }) {
    const [detallesRuta, setDetallesRuta] = useState(null);
    const [center, setCenter] = useState([40.034906, -4.121625]);
    const [clickedPosition, setClickedPosition] = useState(null);
    const [reviewArr, setReviewArr] = useState([]);

    const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();
    //console.log(params)

    useEffect(() => {
        getDetails();
    }, [params.rutaId]);

    const getDetails = async () => {
        try {
            const responseRutas = await service.get(`/rutas/${params.rutaId}`);
            const responseReseñas = await service.get(
                `/reviews/rutas/${params.rutaId}`
            );
            console.log(responseRutas.data);
            console.log(responseReseñas.data);
            setDetallesRuta(responseRutas.data);
            setReviewArr(responseReseñas.data);
            // setCenter(response.data.coordinates)
        } catch (error) {
            navigate("/error500");
        }
    };

    if (detallesRuta === null) {
        return <h3>...buscando</h3>;
    }

    const handleBack = () => navigate(-1);

    const handleToggleUpdateForm = () =>
        setIsUpdateFormShowing(!isUpdateFormShowing);

    return (
        <div className="detalles-ruta">
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>

            <h2>{detallesRuta.name}</h2>
            <img
                src={detallesRuta.image}
                alt={detallesRuta.name}
                width={"300px"}
            />
            <div>{detallesRuta.provincia}</div>
            <div>
                {detallesRuta.distanciaEnKm}km | {detallesRuta.desnivelEnM}m |{" "}
                {detallesRuta.duracionEnHoras}h
            </div>
            <div>
                {detallesRuta.difficulty} | {detallesRuta.modalidad} |{" "}
            </div>

            <MapContainer center={center} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MostrarRuta
                    detallesRuta={detallesRuta}
                    setDetallesRuta={setDetallesRuta}
                    setClickedPosition={setClickedPosition}
                />

                {/* <MarcarPuntosRuta />
                <ClickMarker setClickedPosition={setClickedPosition} />
                {clickedPosition !== null && (
                    <Marker position={clickedPosition} />
                )} */}
            </MapContainer>

            <div>
                {detallesRuta.creador === loggedUserId ? <BorrarRuta /> : null}
            </div>

            <div>
                <button onClick={handleToggleUpdateForm}>Deja tu review</button>
            </div>
            {isUpdateFormShowing === true ? (
                <FormCrearReseña
                    detallesRuta={detallesRuta}
                    setReview={setReviewArr}
                    handleToggleUpdateForm={handleToggleUpdateForm}
                />
            ) : null}
            <div>
                <h3>Reseñas de la ruta:</h3>
                {reviewArr === null
                    ? "Esta ruta aún no tiene reseñas"
                    : reviewArr.map((eachReview) => {
                          console.log(eachReview);
                          return (
                              <div key={eachReview._id} className="card-review">
                                  <h4>{eachReview.title}</h4>
                                  <img
                                      src={eachReview.image}
                                      alt={eachReview.title}
                                      width={"200px"}
                                  />
                                  <p>{eachReview.description}</p>
                                  <p>{eachReview.creador.username}</p>

                                  {eachReview.creador._id === loggedUserId ? (
                                      <BorrarReseña
                                          review={eachReview}
                                          setReview={setReviewArr}
                                          reviewArr={reviewArr}
                                      />
                                  ) : null}
                              </div>
                          );
                      })}
            </div>
        </div>
    );
}

export default DetallesRuta;
