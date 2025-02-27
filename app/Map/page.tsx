
/*
//https://zenn.dev/mapbox_japan/articles/21a276dbc52e7c
//を改変。
"use client";
import { FC, useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
//import Map, { ViewState } from "react-map-gl/maplibre";
import Map, { ViewState } from "react-map-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const InitialViewState: Partial<ViewState> = {
  longitude: -87.61694,
  latitude: 41.86625,
  zoom: 15,
  pitch: 40, // マップの初期ピッチ (傾き)
  bearing: 20, // マップの初期ベアリング (回転)
};

const MAX_PITCH = 85 as const; // マップの最大ピッチ角度
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

      map.on('load', () => {
        // NavigationControlの追加
        const navControl = new maplibregl.NavigationControl({});
        map.addControl(navControl, "top-right");

        // 3D建物の追加
        map.addSource("buildings", {
          type: "geojson",
          data: "https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson",
        });

        map.addLayer({
          id: "3d-buildings",
          source: "buildings",
          type: "fill-extrusion",
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "min_height"],
            "fill-extrusion-opacity": 0.6,
          },
        });
      });
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100vw", height: "100vh", position: "relative" }} />
  );
};

export default TerrainMap;

*/
//https://zenn.dev/mapbox_japan/articles/21a276dbc52e7c
//を改変。
"use client";
import { FC, useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
//import Map, { ViewState } from "react-map-gl/maplibre";
import Map, { ViewState } from "react-map-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const InitialViewState: Partial<ViewState> = {
  longitude: -87.61694,
  latitude: 41.86625,
  zoom: 15,
  pitch: 40, // マップの初期ピッチ (傾き)
  bearing: 20, // マップの初期ベアリング (回転)
};

const MAX_PITCH = 85 as const; // マップの最大ピッチ角度
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

      map.on('load', () => {
        // NavigationControlの追加
        const navControl = new maplibregl.NavigationControl({
          visualizePitch: true // ピッチ（角度）を変更できるようにする
        });
        map.addControl(navControl, "top-right");

        // 3D建物の追加
        map.addSource("buildings", {
          type: "geojson",
          //data: "https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson",
          data: "https://kokontouzai-map.s3.ap-northeast-1.amazonaws.com/mutsuzawa-polygon.geojson?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaDmFwLW5vcnRoZWFzdC0xIkcwRQIhAOW%2FlxYsanvNa7ZtJIaJeybyChT0952leUMCgbFaUdygAiBTP4kz8djwIda5MAAfgRdqbVkL9AzR0CNHT%2F1oLq0ZqirLAwh2EAAaDDQ0MjA0MjUzMzUwMCIM%2FPcmQC8oDtGffyW3KqgDrinK0kHMTljNfwEJZ8BV6Ie2M2Q5rygM1Ed4aw09I%2BNlFpmeegRtTJLtG93y7i1xQuJAbkhr0nf%2B6abw0%2FbkoO6wwcm%2Bd8rRB0cf5X9bQgsLusBufycrITO1QJqXV5BKDEkurMacxQe49XShJkSPPrc67zX6vTWi%2BwTg1Cq3wgkKPbNfh0xe3xzAoLKfpwrKIqnqd2QNVTgA3EpatDCYCi5w3yHL%2FsZ%2B8yeAQDAdlsefg4m%2BGZIRSfIKz65HYf4L5OnBaJXFSs1SFX7qBFq%2BYaEruzjRTqrm%2F5WU3GOdMt%2BU330u42g%2BgKgJuW2IRx5GGjfdb49vh9cet4zJwaGrgRrXVjWlPkyaXUb3bo41SkZachznwSClF9smQ0Yg6wKDfejP8HV7k7%2Bn9irnAQxILloYUdh%2FVIfQjkCbUAUxKTZwJatDCmn7NKXikPb0EBM4BOIdiW8NMADBKNyWXCOEIekloujKov5vBqDIbov9XFx%2BelXnAl7mSfnepUH56iewU5IXI%2BdbZ1RSi9k0Y80ky9GnslT9YLjFLyfgujlfpGJtFXspr7id2zDosoG%2BBjrkAlQOHguKDggzTGya%2Bg0sb75K7JhKOknazj0YpFuOfzH0xJY8AWXC4Lynmi0%2FaNGDZEcTg5ixOnU2pAvzH%2FtTNCk5H%2FQIotrVDqFSjABAn%2B2oGzN%2FhACILRCd%2F9kIh%2BWnVCEvsA1DVdxVdOlDGLdlX1frQTw1%2F9enqZo7Nmg06oeQngviAR8lDZL5gd5dMbCWI1wkDWvtDrnROmci7ow6S9fpuEE%2Bfybe413LRf4yZ3oKxQNG3mG8dA9MUGIYTjNVuc4cHgoYvtuLzg3cmE23GEKYPSvXJO09YZzsEWFOxKxBjmwCgSMN0gB6zrMVoEhysrOUMRwAz1pIzdh7YOYG4RB1hgukKTWGE5aAGfUsD%2F08a65CEfp4q3GWLi1EVYfeKOEJqzxJzIencAsBg5PENoqN5nZRY%2BGMuzbNQHxxVBoebYYny1UQMWqfbW%2B5wmOOc6oJKZCYnyEBqgpdig3mcjds7Xpu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWN26JYZ6FUHTCPKF%2F20250227%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250227T123717Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=b7506bd8ab8f8ded5a1b576164aa887a13212cd8f0956c2fb4ccba0da54dfabc",
        });

        map.addLayer({
          id: "3d-buildings",
          source: "buildings",
          type: "fill-extrusion",
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "min_height"],
            "fill-extrusion-opacity": 0.6,
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

















