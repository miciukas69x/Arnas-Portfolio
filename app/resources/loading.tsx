export default function Loading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-muted rounded w-1/3 mx-auto"></div>
        <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-muted rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

