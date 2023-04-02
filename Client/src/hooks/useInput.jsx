import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
//   state for lat and lon
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    setValue(event.target.value);
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}&autocomplete=true`;
      const response = await fetch(endpoint);
      const results = await response.json();
    //   set the lat and lon
        setLat(results?.features[0]?.center[1]);
        setLon(results?.features[0]?.center[0]);
      setSuggestions(results?.features);
    } catch (error) {
      console.log("Error fetching data, ", error);
    }
  };

  console.log('This is the value in useInput',value);

  return {
    value,
    lat,
    lon,
    setLat,
    setLon,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions,
  };
};

export default useInput;
