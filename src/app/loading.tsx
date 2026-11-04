import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container-page pt-36" aria-busy="true" aria-label="Loading page">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <Skeleton className="h-8 w-36 rounded-full" />
        <Skeleton className="h-14 w-full max-w-xl" />
        <Skeleton className="h-5 w-full max-w-md" />
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="space-y-4 rounded-3xl border border-border p-6">
            <Skeleton className="h-40 w-full rounded-2xl" />
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        ))}
      </div>
    </div>
  );
}
