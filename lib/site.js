export function sitePath(path) {
  return (process.env.NEXT_PUBLIC_BASE_PATH || '') + path;
}

export function siteUrl(path) {
  return new URL(sitePath(path), process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://eisinkan.com').href;
}
