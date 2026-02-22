import Link from "next/link";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/formations", label: "Formations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">
            <span className="text-white">Hypno</span>
            <span className="text-blue-300">Nico</span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm text-white/75 hover:text-white">
                {i.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-2xl bg-blue-500/20 px-3 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30 hover:bg-blue-500/28"
          >
            Demander un devis
          </Link>
        </div>

        <div className="flex gap-4 pb-3 md:hidden">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-xs text-white/70 hover:text-white">
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
