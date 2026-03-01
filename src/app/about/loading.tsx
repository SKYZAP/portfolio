export default function AboutLoading() {
  return (
    <div className="pt-24 pb-16 animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-16 space-y-3">
          <div className="h-4 w-16 bg-muted/50 rounded" />
          <div className="h-10 w-48 bg-muted/50 rounded" />
          <div className="h-5 w-72 bg-muted/50 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-4">
            <div className="h-5 w-full bg-muted/50 rounded" />
            <div className="h-5 w-full bg-muted/50 rounded" />
            <div className="h-5 w-3/4 bg-muted/50 rounded" />
            <div className="h-12 w-44 bg-muted/50 rounded-lg mt-8" />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="h-24 rounded-2xl bg-muted/50" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-muted/50" />
                  <div className="space-y-2">
                    <div className="h-3 w-16 bg-muted/50 rounded" />
                    <div className="h-5 w-32 bg-muted/50 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
