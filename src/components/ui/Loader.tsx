export function Loader({ label = "جاري التحميل..." }: { label?: string }) {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600" />
      <p className="text-sm text-neutral-500">{label}</p>
    </div>
  );
}
