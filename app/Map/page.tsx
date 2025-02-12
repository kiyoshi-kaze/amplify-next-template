'use client'; // この指示を追加

import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Home() {
  useEffect(() => {
    async function initializeMap() {
      const map = new maplibregl.Map({
        container: 'map', // マップを描画するHTML要素またはそのID
        style: 'https://demotiles.maplibre.org/style.json', // マップのスタイルURL
        center: [-123.1187, 49.2819], // [経度, 緯度]
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