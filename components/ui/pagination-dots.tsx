'use client';

import { cn } from '@/lib/utils';

interface PaginationDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
  className?: string;
}

export function PaginationDots({
  total,
  current,
  onChange,
  className,
}: PaginationDotsProps) {
  return (
    <div className={cn('flex gap-2 items-center justify-center', className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={cn(
            'h-2 rounded-full transition-all duration-300',
            index === current
              ? 'bg-primary w-8'
              : 'bg-primary/30 w-2 hover:bg-primary/50'
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === current ? 'true' : 'false'}
        />
      ))}
    </div>
  );
}
