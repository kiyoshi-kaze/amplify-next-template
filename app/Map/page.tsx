import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';

import Link from 'next/link';



import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';

export default function Home() {
  useEffect(() => {
    async function initializeMap() {
      const map = new maplibregl.Map({
        container: 'map', // An HTML Element or HTML element ID to render the map in
        style: 'https://demotiles.maplibre.org/style.json', // Your map style URL
        center: [-123.1187, 49.2819], // [Longitude, Latitude]
        zoom: 11,
      });
    }
    initializeMap();
  }, []);

  return (
    <div>
      <h1>Map Example</h1>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}



