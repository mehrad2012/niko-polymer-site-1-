import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getSiteSettings } from '@/sanity/lib/settings';

export const metadata = {
  title: 'تماس با ما',
  description: 'راه‌های ارتباطی با نیکو پلیمر اروند برای استعلام قیمت و سفارش محصولات.',
};

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Nav />

      <section className="page-banner">
        <div className="grid-bg"></div>
        <div className="inner">
          <div className="eyebrow">تماس با ما</div>
          <h1 className="sec-title">در ارتباط باشید</h1>
          <p className="sec-desc">برای استعلام قیمت، سفارش، یا هر سؤالی، از راه‌های زیر با ما در تماس باشید.</p>
        </div>
      </section>

      <section>
        <div className="contact-info-grid">
          <div className="contact-info-cell">
            <div className="label">آدرس</div>
            <div className="value">{settings?.contactAddress || 'هنوز از پنل وارد نشده'}</div>
          </div>
          <div className="contact-info-cell">
            <div className="label">تلفن</div>
            <div className="value mono">
              {settings?.contactPhone ? (
                <a href={`tel:${settings.contactPhone.replace(/\s/g, '')}`} style={{ color: 'inherit' }}>
                  {settings.contactPhone}
                </a>
              ) : (
                'هنوز از پنل وارد نشده'
              )}
            </div>
          </div>
          <div className="contact-info-cell">
            <div className="label">ایمیل</div>
            <div className="value mono">
              {settings?.contactEmail ? (
                <a href={`mailto:${settings.contactEmail}`} style={{ color: 'inherit' }}>
                  {settings.contactEmail}
                </a>
              ) : (
                'هنوز از پنل وارد نشده'
              )}
            </div>
          </div>
          <div className="contact-info-cell">
            <div className="label">ساعات کاری</div>
            <div className="value">{settings?.workingHours || 'هنوز از پنل وارد نشده'}</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
