'use client';

// pages/index.js

import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://maps.gsi.go.jp/vector/sprite/style.json', // 地理院地図のスタイル
      center: [139.6917, 35.6895], // 初期表示の中心座標（東京の座標を使用）
      zoom: 10, // 初期表示のズームレベル
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default Map;


