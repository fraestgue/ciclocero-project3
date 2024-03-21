import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ClickMarker from "./ClickMarker";
import ClickMarkerEnd from "./ClickMarkerEnd";

function CrearMapaRutaLeaflet(props) {
    const [center, setCenter] = useState([40.034906, -4.121625]);
    const [clickedPositionStart, setClickedPositionStart] = useState(null)
    const [clickedPositionEnd, setClickedPositionEnd] = useState(null)
    return (
        <div className="mapas-leaflet">
            <h4>Marca el punto de inicio de tu ruta</h4>
            <MapContainer className="mapas-leaflet1" center={center} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickMarker setClickedPositionStart={setClickedPositionStart} setCoordinatesStart={props.setCoordinatesStart}/>
                { clickedPositionStart !== null && <Marker position={clickedPositionStart} /> }

                
            </MapContainer>
            <hr />
            <h4>Marca el punto de final de tu ruta</h4>
            <MapContainer className="mapas-leaflet2" center={center} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickMarkerEnd setClickedPositionEnd={setClickedPositionEnd} setCoordinatesEnd={props.setCoordinatesEnd}/>
                { clickedPositionEnd !== null && <Marker position={clickedPositionEnd} /> }

                
            </MapContainer>
        </div>
    );
}

export default CrearMapaRutaLeaflet;
