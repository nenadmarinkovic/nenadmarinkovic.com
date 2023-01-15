import { MapContainer, Marker, Popup, Tooltip, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "public/marker.svg";

const icon = new L.Icon({
  iconUrl: "marker.svg",
  iconRetinaUrl: "marker.svg",
  iconSize: [5, 5],
});

const Map = () => {
  return (
    <MapContainer
      center={[48.224794, 16.397421]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: 400, width: "100%" }}
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVuYWRtYXJpbmtvdmljIiwiYSI6ImNrODVuYzI4ajAyNGIzbGtzbDhpOXB1MG0ifQ.5jlOark-VubVaRu-2wLLMA" />

      <Marker position={[48.224794, 16.397421]} icon={icon}></Marker>
    </MapContainer>
  );
};

export default Map;
