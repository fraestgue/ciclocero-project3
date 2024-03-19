import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

function MarcarPuntosRuta(props) {
    const [center, setCenter] = useState([40.034906, -4.121625]);
    const {detallesRuta, setDetallesRuta, setClickedPosition} = props
    useMapEvents({
        click: () => {
          console.log(detallesRuta.coordinatesStart);
          console.log(detallesRuta.coordinatesEnd)
          const objStart = detallesRuta.coordinatesStart;
          const objEnd = detallesRuta.coordinatesEnd
          setClickedPosition([objStart.lat.toFixed(5), objStart.lng.toFixed(5)]);
        },
      })
    return (
        <div>
            <MapContainer center={center} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


            </MapContainer>
        </div>
    );
}

export default MarcarPuntosRuta;
