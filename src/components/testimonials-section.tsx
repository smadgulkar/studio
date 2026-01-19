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
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Stories From Our Travelers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences with Unitravco.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between p-6 shadow-lg bg-card">
                    <CardContent className="p-0 space-y-4">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="text-lg font-body italic text-foreground/90">
                        “{testimonial.quote}”
                      </blockquote>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">Valued Client</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}
