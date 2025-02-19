"use client";
import { FC } from "react";
import * as maplibregl from "maplibre-gl";
import Map, { ViewState } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const InitialViewState: Partial<ViewState> = {
  longitude: 135.8,
  latitude: 37.5,
  zoom: 5,
  pitch: 45,
  bearing: 0,
};

const MAX_PITCH = 85 as const;
const MAX_ZOOM = 15 as const;
const MIN_ZOOM = 1 as const;

const TerrainMap: FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        //initialViewState={InitialViewState}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"
        maxPitch={MAX_PITCH}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        attributionControl={true}
      />
    </div>
  );
};

export default TerrainMap;




/*
//ナビゲーションコントロール付き
"use client";
import { FC, useEffect, useRef } from "react";
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
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
        center: [InitialViewState.longitude!, InitialViewState.latitude!],
        zoom: InitialViewState.zoom,
        pitch: InitialViewState.pitch,
        bearing: InitialViewState.bearing,
        maxPitch: MAX_PITCH,
        maxZoom: MAX_ZOOM,
        minZoom: MIN_ZOOM,
      });

      map.on('load', () => {
        // NavigationControlの追加
        const navControl = new maplibregl.NavigationControl({});
        map.addControl(navControl, "top-right");
      });
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100vw", height: "100vh", position: "relative" }} />
  );
};

export default TerrainMap;

*/










