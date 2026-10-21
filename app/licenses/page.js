import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export const metadata = {
  title: 'گواهینامه‌ها',
  description: 'استانداردها و مجوزهای کیفیت تولید قطعات پلاستیکی خودرو.',
};

export const dynamic = 'force-dynamic';

async function getLicenses() {
  try {
    const result = await client.fetch(
      `*[_type == "license"] | order(order asc){ _id, title, issuer, description, image }`
    );
    return result || [];
  } catch (err) {
    return [];
  }
}

export default async function LicensesPage() {
  const licenses = await getLicenses();

  return (
    <>
      <Nav />

      <section className="page-banner">
        <div className="grid-bg"></div>
        <div className="inner">
          <div className="eyebrow">گواهینامه‌ها</div>
          <h1 className="sec-title">استانداردها و مجوزهای کیفیت</h1>
          <p className="sec-desc">مدارک و گواهینامه‌های تولید، مطابق استاندارد صنعت خودرو.</p>
        </div>
      </section>

      <section>
        <div className="license-grid">
          {licenses.length === 0 && (
            <p className="sec-desc">هنوز گواهینامه‌ای از پنل اضافه نشده — از /studio یکی اضافه کن.</p>
          )}
          {licenses.map((l, i) => (
            <Reveal key={l._id} delay={i * 90}>
              <div className="license-card">
                <div className="license-thumb">
                  {l.image ? (
                    <div className="license-frame">
                      <Image
                        src={urlFor(l.image).width(500).height(340).auto('format').url()}
                        unoptimized
                        alt={l.title}
                        fill
                        sizes="(max-width: 600px) 100vw, 33vw"
                        style={{ objectFit: 'contain', padding: '10px' }}
                      />
                    </div>
                  ) : (
                    <div className="ic">{String(i + 1).padStart(2, '0')}</div>
                  )}
                </div>
                <div className="license-body">
                  <h4>{l.title}</h4>
                  {l.issuer && (
                    <p style={{ color: 'var(--amber)', fontSize: '12px', margin: '4px 0 8px', fontFamily: 'var(--font-mono)' }}>
                      {l.issuer}
                    </p>
                  )}
                  <p>{l.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
