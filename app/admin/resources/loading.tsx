export default function Loading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-muted rounded w-1/3"></div>
        <div className="h-96 bg-muted rounded-lg"></div>
      </div>
    </div>
  );
}

