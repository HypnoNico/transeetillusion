import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 py-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm text-white/70">
              © {year} {site.brand} — {site.name}
            </p>
            <p className="mt-2 text-sm text-white/60">
              {site.city} •{" "}
              <a className="underline underline-offset-4 hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              •{" "}
              <a className="underline underline-offset-4 hover:text-white" href={`tel:${site.phoneE164}`}>
                {site.phoneLabel}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65 md:justify-end">
            <Link className="hover:text-white" href="/mentions-legales">Mentions légales</Link>
            <Link className="hover:text-white" href="/politique-confidentialite">Confidentialité</Link>
            <a className="hover:text-white" href={site.instagram}>Instagram</a>
          </div>
        </div>

        <p className="pb-10 text-xs text-white/45">
          L’hypnose est une expérience de suggestion et d’imagination guidée. Aucune prestation ne constitue un acte médical.
        </p>
      </div>
    </footer>
  );
}
