import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-secondary/40 to-background overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-12 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Travel Styles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From serene beach holidays to adventurous treks, we tailor every trip to your unique desires. Discover your perfect journey with us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            const staggerClass = `stagger-${index + 1}`;
            return (
              <Card key={service.id} className={`overflow-hidden group flex flex-col bg-card/90 shadow-soft card-hover animate-fade-in-up ${staggerClass}`}>
                {image && (
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="image-zoom object-cover w-full h-auto aspect-[3/2]"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="gradient-overlay" aria-hidden="true" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
