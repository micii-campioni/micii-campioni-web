import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-sand-50">
      <div className="text-center">
        <Spinner size="lg" className="mx-auto mb-4" />
        <p className="text-sand-600">Se încarcă...</p>
      </div>
    </div>
  );
}
