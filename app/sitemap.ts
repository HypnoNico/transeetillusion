export default function sitemap() {
  const base = "https://transeetillusion.fr";
  const now = new Date();

  const routes = [
    "",
    "/prestations",
    "/formations",
    "/faq",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
  }));
}
