"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Something went wrong!</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {error.message || 'An unexpected error occurred'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

