import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FactoryGallery from '@/components/FactoryGallery';
import Footer from '@/components/Footer';
import { getSiteSettings } from '@/sanity/lib/settings';
import { SITE_URL, SITE_NAME } from '@/lib/site';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return {
    description:
      settings?.heroLead ||
      'تولیدکننده قطعات تزریق پلاستیک و بست‌های ایمنی خودرو، مطابق استاندارد صنعت خودرو.',
  };
}

export default async function Home() {
  const settings = await getSiteSettings();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: settings?.heroLead || undefined,
    address: settings?.contactAddress || undefined,
    telephone: settings?.contactPhone || undefined,
    email: settings?.contactEmail || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero
        eyebrow={settings?.heroEyebrow}
        title={settings?.heroTitle}
        accent={settings?.heroAccent}
        lead={settings?.heroLead}
        specs={settings?.heroSpecs}
      />
      <About
        title={settings?.aboutTitle}
        text={settings?.aboutText}
        statNumber={settings?.aboutStatNumber}
        statLabel={settings?.aboutStatLabel}
      />
      <FactoryGallery />
      <Footer />
    </>
  );
}
