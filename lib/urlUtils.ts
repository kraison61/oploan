export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+|\|/g, "-") // Replace spaces and | with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars except -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}



export function generateFriendlyUrl(id: string): string {
  const content = contentData.find((item) => item.id === id);
  if (!content) return `/content/${id}`;

  const friendlySlug = content.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `/content/${id}/${friendlySlug}`;
}

export function getIdFromFriendlyUrl(url: string): string | null {
  const parts = url.split("/");

  //The ID is always the third part of the URL
  return parts.length >= 3 ? parts[2] : null;
}
