/* A link styled as a button.
   variant "primary" is the main action; "outline" is secondary. */
export default function Button({ href, variant = "primary", className = "", children }) {
  const style = variant === "outline" ? "btn-outline" : "btn-primary";
  return (
    <a href={href} className={`${style} ${className}`}>
      {children}
    </a>
  );
}
