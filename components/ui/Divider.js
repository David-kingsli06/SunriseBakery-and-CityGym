/* Thin line with a small dot, placed between sections */
export default function Divider() {
  return (
    <div className="flex h-6 items-center justify-center gap-3.5 bg-cream" aria-hidden="true">
      <span className="h-px w-24 bg-caramel opacity-45" />
      <span className="h-2 w-2 rounded-full bg-caramel opacity-70" />
      <span className="h-px w-24 bg-caramel opacity-45" />
    </div>
  );
}
