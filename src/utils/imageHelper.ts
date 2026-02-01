/**
 * Utility function to get the correct image path for GitHub Pages deployment
 * Handles base path prefixing automatically
 */
export function getImagePath(path: string): string {
  const basePath = import.meta.env.BASE_URL;
  // If path already starts with base path or is a relative path, return as-is
  if (path.startsWith('http') || path.startsWith('/BhaskarVPortfolio')) {
    return path;
  }
  // If path starts with /, prepend the base path
  if (path.startsWith('/')) {
    // Ensure proper path construction
    const cleanBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    return `${cleanBase}${path}`;
  }
  return path;
}
