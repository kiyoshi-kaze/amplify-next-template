'use client';

import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Home() {
  useEffect(() => {
    async function initializeMap() {
      const map = new maplibregl.Map({
        container: 'map', // マップを描画するHTML要素またはそのID
        style: {
          version: 8,
          sources: {
            'gsi-dem': {
              type: 'raster-dem',
              tiles: [
                'https://cyberjapandata.gsi.go.jp/xyz/dem5a_png/{z}/{x}/{y}.png'
              ],
              tileSize: 256,
              encoding: 'mapbox'
            },
            'gsi-map': {
              type: 'raster',
              tiles: [
                'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
              ],
              tileSize: 256
            }
          },
          layers: [
            {
              id: 'gsi-map',
              type: 'raster',
              source: 'gsi-map',
              minzoom: 0,
              maxzoom: 18
            },
            {
              id: 'gsi-dem',
              type: 'hillshade',
              source: 'gsi-dem',
              minzoom: 0,
              maxzoom: 18
            }
          ]
        }, // 国土地理院の標準地図タイルと標高タイル
        center: [140.303, 35.353], // むつざわ道の駅の経度と緯度
        zoom: 15,
      });

      map.on('load', () => {
        map.setTerrain({ source: 'gsi-dem', exaggeration: 1.5 });

        map.addLayer({
          id: 'hillshade',
          type: 'hillshade',
          source: 'gsi-dem',
          layout: { visibility: 'visible' }
        });
      });
    }
    initializeMap();
  }, []);

  return (
    <div>
      <h1>3D Map Example</h1>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}

