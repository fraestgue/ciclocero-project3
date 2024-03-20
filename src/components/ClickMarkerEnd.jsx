import { useMapEvents } from "react-leaflet/hooks";

function ClickMarkerEnd({  setClickedPositionEnd, setCoordinatesEnd }) {
  useMapEvents({
    click: (event) => {
      console.log(event.latlng);
      const obj = event.latlng;
      setClickedPositionEnd([obj.lat.toFixed(5), obj.lng.toFixed(5)]);
      setCoordinatesEnd([obj.lat.toFixed(5), obj.lng.toFixed(5)])
    },
  });
  return null;
}

export default ClickMarkerEnd;