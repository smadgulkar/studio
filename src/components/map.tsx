"use client";

import Image from 'next/image';

export function Map() {
  // Using a static image for the map as a placeholder since an API key is not available for the prototype.
  return (
    <div className="w-full h-full relative">
      <Image
        src="https://images.unsplash.com/photo-1594398935255-38b8c195a432?q=80&w=1080&auto=format&fit=crop"
        alt="A map with a pin indicating a location in Madison, NJ"
        fill
        className="object-cover"
        data-ai-hint="map pin location"
      />
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
       <div className="absolute bottom-4 left-4 text-white">
          <p className="font-bold font-headline text-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Unitravco</p>
          <p className="text-sm" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>Madison, NJ</p>
       </div>
    </div>
  );
}
