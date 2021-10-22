import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/nikets40/ckv1usiwl34lw15mvu2k6kgl0"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            onClick={()=>setSelectedLocation(result)}
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p role="img" className="text-2xl cursor-pointer animate-bounce">
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
            closeOnClick={true}
            onClose={()=>setSelectedLocation({})}
            latitude={result.lat}
            longitude={result.long}
            >{result.title}</Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
