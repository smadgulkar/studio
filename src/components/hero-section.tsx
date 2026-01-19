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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container max-w-4xl space-y-6">
          <h1 className="font-headline text-5xl font-bold md:text-7xl">
            Curated Travel, 40 Years of Excellence.
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Unitravco in Madison, NJ crafts bespoke journeys that create lifelong memories.
            Let our experience guide your next adventure.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
            <Link href="#contact">Plan Your Trip</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
