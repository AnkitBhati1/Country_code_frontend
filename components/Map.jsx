
import MapGL, { Marker } from "react-map-gl";
import { FaHandPointer } from "react-icons/fa";
import "mapbox-gl/dist/mapbox-gl.css";
const Map = ({latitude, longitude}) => {

  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  return (
    <>
      <MapGL
        mapboxAccessToken={process.env.MAPBOX_KEY}
        initialViewState={{
          longitude: lon,
          latitude: lat,
          zoom: 4,
        }}
        style={{ width: 650, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker latitude={lat} longitude={lon} anchor="bottom">
          {/* <FaHandPointer className="text-2xl text-red-700" /> */}
        </Marker>
      </MapGL>
    </>
  );
};

export default Map;