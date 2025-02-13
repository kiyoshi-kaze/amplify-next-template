"use client";
import { FC, useState, useCallback } from "react";
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
  pitch: 45, // マップの初期ピッチ (傾き)
  bearing: 0, // マップの初期ベアリング (回転)
  padding: { top: 0, bottom: 0, left: 0, right: 0 } // 必要な padding プロパティを追加
};

const MAX_PITCH = 85 as const; // マップの最大ピッチ角度
const MAX_ZOOM = 15 as const;
const MIN_ZOOM = 1 as const;

const TerrainMap: FC = () => {
  const [viewState, setViewState] = useState<ExtendedViewState>({
    ...InitialViewState,
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleMoveEnd = useCallback((event: { viewState: ViewState }) => {
    setViewState((prev) => ({ ...prev, ...event.viewState }));
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        mapLib={maplibregl}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"
        initialViewState={InitialViewState}
        viewState={viewState}
        onMoveEnd={(event) => handleMoveEnd(event)}
        maxPitch={MAX_PITCH}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        attributionControl={true}
      />
    </div>
  );
};

export default TerrainMap;




