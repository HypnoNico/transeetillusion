import { site } from "@/lib/site";

export default function PolitiqueConfidentialite() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold">Politique de confidentialité</h1>

      <div className="mt-8 space-y-4 text-sm text-white/70">
        <p>Nous traitons les données que vous nous transmettez quand vous nous contactez (email, téléphone, DM Instagram).</p>

        <p><span className="font-semibold text-white">Finalité :</span> répondre à votre demande, établir un devis, organiser une prestation ou une formation.</p>
        <p><span className="font-semibold text-white">Durée :</span> jusqu’à 24 mois après le dernier échange (sauf obligation légale).</p>
        <p><span className="font-semibold text-white">Partage :</span> aucune vente de données. Partage uniquement si nécessaire à l’organisation, avec votre accord.</p>

        <p><span className="font-semibold text-white">Vos droits :</span> accès, rectification, suppression, opposition. Contact : <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>

        <p><span className="font-semibold text-white">Cookies :</span> aucun cookie publicitaire. Si une mesure d’audience est ajoutée plus tard, cette page sera mise à jour.</p>
      </div>
    </main>
  );
}
