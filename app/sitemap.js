import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const routes = ['', '/about', '/licenses', '/contact'];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
