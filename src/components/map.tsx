"use client";

import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import L from "leaflet";

const position: [number, number] = [40.7595, -74.4172];

export function Map() {
  const markerIcon = useMemo(
    () =>
      L.divIcon({
        className: "custom-marker",
        html: '<span class="marker-pin"></span><span class="marker-core"></span>',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -24],
      }),
    []
  );

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <div className="space-y-1">
              <p className="font-semibold">Unitravco</p>
              <p className="text-sm text-muted-foreground">Madison, NJ</p>
            </div>
          </Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur">
        Madison, NJ
      </div>
    </div>
  );
}
