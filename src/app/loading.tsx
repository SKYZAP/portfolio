export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-4rem)] pt-24 pb-16 animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="md:col-span-2 lg:col-span-3 row-span-2 p-8 md:p-12 rounded-2xl bg-muted/50 min-h-[400px]" />
          <div className="p-6 rounded-2xl bg-muted/50 h-32" />
          <div className="p-6 rounded-2xl bg-muted/50 h-32" />
          <div className="p-6 rounded-2xl bg-muted/50 h-32" />
          <div className="p-6 rounded-2xl bg-muted/50 h-32" />
          <div className="md:col-span-2 p-6 rounded-2xl bg-muted/50 h-24" />
        </div>
      </div>
    </div>
  );
}
