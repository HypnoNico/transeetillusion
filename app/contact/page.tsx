"use client";
import Link from "next/link";
import { site } from "@/lib/site";

function mailtoFromForm(data: Record<string, string>) {
  const subject = encodeURIComponent(`Demande de devis — ${data.type || "Hypnose"}`);
  const body = encodeURIComponent(
    [
      `Nom : ${data.nom || ""}`,
      `Téléphone : ${data.tel || ""}`,
      `Email : ${data.email || ""}`,
      `Type : ${data.type || ""}`,
      `Date : ${data.date || ""}`,
      `Lieu : ${data.lieu || ""}`,
      `Public (approx) : ${data.public || ""}`,
      ``,
      `Message :`,
      `${data.message || ""}`,
      ``,
      `Contact HypnoNico : ${site.phoneLabel} • ${site.email}`,
    ].join("\n")
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold">Contact</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Devis rapide. Tu peux passer par le formulaire (email pré-rempli) ou en DM Instagram.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold">DM Instagram (le plus rapide)</h2>
          <p className="mt-2 text-sm text-white/70">
            Envoie : date + lieu + type (show/close-up/formation) + nombre de personnes.
          </p>

          <div className="mt-4 flex gap-3">
            <a className="rounded-2xl bg-white/0 px-4 py-2 text-sm text-white/85 ring-1 ring-white/15 hover:bg-white/5" href={site.instagram}>
              Ouvrir Instagram
            </a>
            <Link className="rounded-2xl bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30 hover:bg-blue-500/28" href="#devis">
              Formulaire devis
            </Link>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="text-lg font-bold">Email</h3>
            <p className="mt-2 text-sm text-white/70">
              <a className="underline underline-offset-4 hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>

            <h3 className="mt-5 text-lg font-bold">Téléphone</h3>
            <p className="mt-2 text-sm text-white/70">
              <a className="underline underline-offset-4 hover:text-white" href={`tel:${site.phoneE164}`}>
                {site.phoneLabel}
              </a>
            </p>
          </div>
        </div>

        <form
          id="devis"
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const data = Object.fromEntries(fd.entries()) as Record<string, string>;
            window.location.href = mailtoFromForm(data);
          }}
        >
          <h2 className="text-lg font-bold">Demander un devis</h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input name="nom" placeholder="Nom / Société" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50" />
            <input name="tel" placeholder="Téléphone" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50" />
            <input name="email" placeholder="Email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50 sm:col-span-2" />

            <select name="type" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50" defaultValue="Spectacle / Show">
              <option>Spectacle / Show</option>
              <option>Close-up / Animation</option>
              <option>Entreprise / Team building</option>
              <option>Événement privé</option>
              <option>Formation hypnose</option>
            </select>

            <input name="date" placeholder="Date (si connue)" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50" />
            <input name="lieu" placeholder="Lieu / Ville" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50" />
            <input name="public" placeholder="Nombre de personnes (approx)" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50" />

            <textarea name="message" placeholder="Détails : contexte, public, contraintes, objectifs…" rows={5} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-blue-400/50 sm:col-span-2" />
          </div>

          <button type="submit" className="mt-5 w-full rounded-2xl bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30 hover:bg-blue-500/28">
            Envoyer la demande (email)
          </button>

          <p className="mt-3 text-xs text-white/50">
            Le bouton ouvre ton client mail avec le message pré-rempli (pas de paiement en ligne).
          </p>
        </form>
      </div>
    </main>
  );
}
