export default {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  ...(process.env.PAGES_BUILD === 'true' ? { output: 'export' } : {}),
};
