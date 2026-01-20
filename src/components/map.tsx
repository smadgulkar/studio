"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Map() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'contact-map');

  return (
    <div className="w-full h-full relative">
      {mapImage ? (
        <Image
          src={mapImage.imageUrl}
          alt={mapImage.description}
          fill
          className="object-cover"
          data-ai-hint={mapImage.imageHint}
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Map image not available</p>
        </div>
      )}
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
       <div className="absolute bottom-4 left-4 text-white">
          <p className="font-bold font-headline text-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Unitravco</p>
          <p className="text-sm" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>Madison, NJ</p>
       </div>
    </div>
  );
}
