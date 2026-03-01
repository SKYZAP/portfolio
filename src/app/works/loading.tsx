export default function WorksLoading() {
  return (
    <div className="pt-24 pb-16 animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-16 space-y-3">
          <div className="h-4 w-16 bg-muted/50 rounded" />
          <div className="h-10 w-64 bg-muted/50 rounded" />
          <div className="h-5 w-96 bg-muted/50 rounded" />
        </div>

        <div className="flex gap-4 mb-12 border-b border-border/50 pb-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-5 w-16 bg-muted/50 rounded" />
          ))}
        </div>

        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 py-8 border-b border-border/50">
              <div className="w-full md:w-56 aspect-[16/10] rounded-xl bg-muted/50" />
              <div className="flex-1 space-y-3">
                <div className="h-7 w-48 bg-muted/50 rounded" />
                <div className="h-4 w-full max-w-lg bg-muted/50 rounded" />
                <div className="h-4 w-3/4 bg-muted/50 rounded" />
                <div className="flex gap-2 mt-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-muted/50 rounded" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
