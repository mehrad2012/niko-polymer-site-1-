import NavClient from './NavClient';
import { getSiteSettings } from '@/sanity/lib/settings';
import { urlFor } from '@/sanity/lib/image';

const defaultNavItems = [
  { label: 'درباره ما', href: '/about' },
  { label: 'گواهینامه‌ها', href: '/licenses' },
  { label: 'تماس با ما', href: '/contact' },
];

export default async function Nav() {
  const settings = await getSiteSettings();
  const navItems = settings?.navItems?.length ? settings.navItems : defaultNavItems;
  const logoUrl = settings?.logo ? urlFor(settings.logo).width(160).url() : null;
  return <NavClient navItems={navItems} logoUrl={logoUrl} />;
}
