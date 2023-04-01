import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const App = () => {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: -1,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    />
  );
};

export default App;
