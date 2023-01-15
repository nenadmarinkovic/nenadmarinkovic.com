import { MapContainer, Marker, Popup, Tooltip, TileLayer } from "react-leaflet";
import { Introduction } from "../styles/components/introduction";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { Title, Post } from "../styles/pages/common";

const icon = new L.Icon({
  iconUrl: "marker.svg",
  iconRetinaUrl: "marker.svg",
  iconSize: [5, 5],
});

const Map = ({ theme }: any) => {
  return (
    <>
      <Post>
        <Title>Location</Title>
        <Introduction>
          I write mostly about web development and tech. Use the search below to
          filter by title.
        </Introduction>
      </Post>

      <MapContainer
        center={[48.224794, 16.397421]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: 400, width: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${
            theme === "light" ? "light-v11" : "cj3kbeqzo00022smj7akz3o1e"
          }/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVuYWRtYXJpbmtvdmljIiwiYSI6ImNrODVuYzI4ajAyNGIzbGtzbDhpOXB1MG0ifQ.5jlOark-VubVaRu-2wLLMA`}
        />

        <Marker position={[48.224794, 16.397421]} icon={icon}></Marker>
      </MapContainer>
    </>
  );
};

export default Map;
