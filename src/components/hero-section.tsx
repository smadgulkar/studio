import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container max-w-4xl space-y-6">
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl" style={{textShadow: '0 3px 6px rgba(0,0,0,0.4)'}}>
            Exquisite Journeys for the Modern Family.
          </h1>
          <p className="text-lg text-neutral-200 md:text-xl max-w-3xl mx-auto">
            Discover unparalleled luxury and family-friendly adventures. With 40 years of expertise, Unitravco designs unforgettable travel experiences.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link href="#contact">Begin Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
