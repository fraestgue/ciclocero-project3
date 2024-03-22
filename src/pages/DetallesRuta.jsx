import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../service/config.service";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import btnAtras from "../assets/btn-atras.png";
import FormCrearReseña from "../components/FormCrearReseña";
import BorrarReseña from "../components/BorrarReseña";
import MostrarRuta from "../components/MostrarRuta";
import BorrarRuta from "../components/BorrarRuta";
import Spinner from "../components/Spinner";

function DetallesRuta({ loggedUserId }) {
    const [detallesRuta, setDetallesRuta] = useState(null);
    const [center, setCenter] = useState([40.034906, -4.121625]);
    const [clickedPosition, setClickedPosition] = useState(null);
    const [reviewArr, setReviewArr] = useState([]);

    const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        getDetails();
    }, [params.rutaId]);

    const getDetails = async () => {
        try {
            const responseRutas = await service.get(`/rutas/${params.rutaId}`);
            const responseReseñas = await service.get(
                `/reviews/rutas/${params.rutaId}`
            );

            setDetallesRuta(responseRutas.data);
            setReviewArr(responseReseñas.data);
        } catch (error) {
            navigate("/error500");
        }
    };

    if (detallesRuta === null) {
        return <Spinner />;
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
            <div>
                {detallesRuta.provincia[0].toUpperCase() +
                    detallesRuta.provincia.slice(1)}
            </div>
            <div>
                {detallesRuta.distanciaEnKm}km | {detallesRuta.desnivelEnM}m |{" "}
                {detallesRuta.duracionEnHoras}h
            </div>
            <div>
                {detallesRuta.difficulty[0].toUpperCase() +
                    detallesRuta.difficulty.slice(1)} | {detallesRuta.modalidad[0].toUpperCase() +
                        detallesRuta.modalidad.slice(1)} |{" "}
            </div>
                <div className="mapa-detalles-ruta">
            <MapContainer center={center} zoom={5} scrollWheelZoom={true} >
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
</div>
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
                {reviewArr.length === 0
                    ? "Esta ruta aún no tiene reseñas"
                    : reviewArr.map((eachReview) => {
                          return (
                              <div key={eachReview._id} className="card-review">
                                  <h4>{eachReview.title}</h4>
                                  <div>
                                      <img
                                          src={eachReview.image}
                                          alt={eachReview.title}
                                          width={"200px"}
                                      />
                                  </div>
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
