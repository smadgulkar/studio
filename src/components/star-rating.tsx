import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type StarRatingProps = {
  rating: number;
  className?: string;
};

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center', className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-5 w-5',
            rating > i ? 'text-accent fill-accent' : 'text-muted-foreground/50'
          )}
        />
      ))}
    </div>
  );
}
