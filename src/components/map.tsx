"use client";

import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';

export function Map() {
  const position = { lat: 40.7593, lng: -74.4155 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center rounded-lg">
        <p className="text-muted-foreground text-center p-4">
          Google Maps API Key is missing. <br />
          Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <GoogleMap
        style={{ width: '100%', height: '100%', borderRadius: 'var(--radius)' }}
        defaultCenter={position}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId="unitravco-map"
      >
        <Marker position={position} />
      </GoogleMap>
    </APIProvider>
  );
}
