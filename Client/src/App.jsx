import { useCallback } from 'react';
import Map, { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid';

const App = () => {
  const geoLocateControlRef = useCallback((ref) => {
    if (ref) {
      ref.trigger();
    }
  }, []);

  return (
    <>
      <Map
        initialViewState={{
          longitude: -90.071533,
          latitude: 29.951065,
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
      >
        <GeolocateControl
          ref={geoLocateControlRef}
          trackUserLocation={true}
          showAccuracyCircle={false}
          showUserHeading={true}
          position="bottom-right"
        />
      </Map>

      <div
        className="bg-white rounded-3xl shadow-lg z-30 absolute top-16
       left-1/2 transform -translate-x-1/2 w-3/4 md:top-20 md:w-1/2
       "
      >
        {/* filter here */}
        {/* <div className="border-b-[1px] border-[#051A2D4D] w-full">
          <h2>Fridge</h2>
        </div> */}
        <div className="flex justify-between items-center px-3 py-2">
          <MapPinIcon className="w-6 h-6 text-[#051A2D]" />
          <input
            type="text"
            className="w-4/5 h-full bg-white focus:outline-none placeholder:text-[#051A2D]"
            placeholder="Search Location"
          />
          <div className="bg-[#FB7712] rounded-full w-6 h-6 flex justify-center items-center">
            <MagnifyingGlassIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
