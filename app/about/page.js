import Nav from '@/components/Nav';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { getSiteSettings } from '@/sanity/lib/settings';

export const metadata = {
  title: 'درباره ما',
  description: 'درباره نیکو پلیمر اروند — تولیدکننده قطعات تزریق پلاستیک و بست‌های ایمنی خودرو.',
};

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '90px' }}>
        <About
          title={settings?.aboutTitle}
          text={settings?.aboutText}
          statNumber={settings?.aboutStatNumber}
          statLabel={settings?.aboutStatLabel}
        />
      </div>
      <Footer />
    </>
  );
}
