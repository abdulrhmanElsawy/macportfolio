/**
 * Resolves asset paths for deployment on GitHub Pages (or any subpath).
 * Use for all images, icons, and files in public/.
 * @param {string} path - Path like "/images/logo.svg" or "images/logo.svg"
 * @returns {string} URL that works for the current base (e.g. "./images/logo.svg")
 */
export function assetUrl(path) {
  const clean = (path || '').replace(/^\//, '');
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${clean}`;
}
