import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Travel Styles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From serene beach holidays to adventurous treks, we tailor every trip to your unique desires. Discover your perfect journey with us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            return (
              <Card key={service.id} className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-card shadow-lg">
                {image && (
                  <div className="overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                    />
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
