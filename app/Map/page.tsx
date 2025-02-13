"use client";
import { FC, useState, useCallback, useEffect } from "react";
import * as maplibregl from "maplibre-gl";
import Map, { ViewState } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

interface ExtendedViewState extends ViewState {
  width: number;
  height: number;
}

const InitialViewState: Omit<ExtendedViewState, 'width' | 'height'> = {
  longitude: 140.303551,
  latitude: 35.352952,
  zoom: 15,
  pitch: 45,
  bearing: 0,
  padding: { top: 0, bottom: 0, left: 0, right: 0 }
};

const MAX_PITCH = 85 as const;
const MAX_ZOOM = 15 as const;
const MIN_ZOOM = 1 as const;

const TerrainMap: FC = () => {
  const [viewState, setViewState] = useState<ExtendedViewState>({
    ...InitialViewState,
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleMoveEnd = useCallback((event: { viewState: ViewState }) => {
    setViewState((prev) => ({
      ...prev,
      ...event.viewState,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  }, []);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
      center: [InitialViewState.longitude, InitialViewState.latitude],
      zoom: InitialViewState.zoom,
      pitch: InitialViewState.pitch,
      bearing: InitialViewState.bearing
    });

    map.on('moveend', () => {
      const newViewState = {
        longitude: map.getCenter().lng,
        latitude: map.getCenter().lat,
        zoom: map.getZoom(),
        pitch: map.getPitch(),
        bearing: map.getBearing(),
      };
      setViewState((prev) => ({
        ...prev,
        ...newViewState,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }}>
      <Map
        mapLib={maplibregl}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"
        initialViewState={InitialViewState}
        viewState={viewState}
        maxPitch={MAX_PITCH}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        attributionControl={true}
      />
    </div>
  );
};

export default TerrainMap;


