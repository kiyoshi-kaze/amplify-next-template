//https://zenn.dev/mapbox_japan/articles/21a276dbc52e7c
//を改変。
/*


"use client";
import { FC, useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import Map, { ViewState } from "react-map-gl";
import * as THREE from "three";

import "maplibre-gl/dist/maplibre-gl.css";

import { FeatureCollection, Geometry } from 'geojson';

const InitialViewState: Partial<ViewState> = {
  longitude: 140.302994,
  latitude: 35.353503,
  zoom: 15,
  pitch: 40,
  bearing: 20,
};

const buildingData: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "ef6512f46485e27963c248bcc945c3db",
      properties: {
        level: 1,
        name: "outer-walls",
        height: 6,
        base_height: 0,
        color: "transparent",
        stroke: "black",
        "stroke-width": 1,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [140.30278407246294, 35.3536506960797],
            [140.3028859586707, 35.353561867136904],
            [140.30301946473617, 35.353828353672114],
            [140.30278407246294, 35.35364783063146],
          ],
        ],
      },
    },
  ],
};

const MAX_PITCH = 85 as const;
const MAX_ZOOM = 30 as const;
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

      map.on("load", () => {
        const navControl = new maplibregl.NavigationControl({
          visualizePitch: true,
        });
        map.addControl(navControl, "top-right");

        map.addSource("buildings", {
          type: "geojson",
          data: buildingData,
        });

        map.addLayer({
          id: "3d-buildings",
          source: "buildings",
          type: "fill-extrusion",
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "base_height"],
            "fill-extrusion-opacity": 0.1,
          },
        });

      });
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "80vw", height: "100vh", position: "relative" }} />
  );
};

export default TerrainMap;

*/

"use client";
import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function App() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: {
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            minzoom: 0,
            maxzoom: 19,
          },
        },
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: {
              'background-color': '#e0dfdf',
            },
          },
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
          },
        ],
      },
      center: [-87.61694, 41.86625],
      zoom: 15.99,
      pitch: 40,
      bearing: 20,
    });

    map.on('load', () => {
      map.addSource('floorplan', {
        type: 'geojson',
        data: 'https://maplibre.org/maplibre-gl-js/docs/assets/indoor-3d-map.geojson',
      });

      map.addLayer({
        id: 'room-extrusion',
        type: 'fill-extrusion',
        source: 'floorplan',
        paint: {
          'fill-extrusion-color': ['get', 'color'],
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'base_height'],
          'fill-extrusion-opacity': 0.5,
        },
      });
    });
  }, []);

  return <div id="map" style={{ height: '100vh' }} />;
}