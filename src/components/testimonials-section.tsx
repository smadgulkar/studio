"use client";

import { testimonials } from '@/lib/data';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarRating } from './star-rating';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Stories From Our Travelers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences with Unitravco.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between p-6">
                    <CardContent className="p-0 space-y-4">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="text-lg font-body italic text-foreground">
                        “{testimonial.quote}”
                      </blockquote>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-6">
                      <Avatar>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
