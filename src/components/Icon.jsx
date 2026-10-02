export default function Icon({ children, label, href, onClick, ...props }) {
  const Element = href ? 'a' : 'button'

  return (
    <Element
      href={href}
      type={href ? undefined : 'button'}
      onClick={onClick}
      aria-label={label}
      {...props}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:text-white hover:border-blue-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </Element>
  );
}
