// https://zenn.dev/kikiki_kiki/articles/f60927e05e9c3f より


"use client";
import { FC } from "react";
import * as maplibregl from "maplibre-gl";
import Map, { ViewState } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const InitialViewState: Partial<ViewState> = {
  longitude: 135.8,
  latitude: 37.5,
  zoom: 5,
  pitch: 45, // マップの初期ピッチ (傾き)
  bearing: 0, // マップの初期ベアリング (回転)
};

const MAX_PITCH = 85 as const; // マップの最大ピッチ角度
const MAX_ZOOM = 15 as const;
const MIN_ZOOM = 1 as const;

const TerrainMap: FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        mapLib={maplibregl}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"
        initialViewState={InitialViewState}
        maxPitch={MAX_PITCH}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        attributionControl={true}
      />
    </div>
  );
};

export default TerrainMap;




