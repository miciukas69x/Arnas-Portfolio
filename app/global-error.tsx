"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-muted px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Something went wrong!</h1>
            <p className="mb-4 text-xl text-muted-foreground">
              {error.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

