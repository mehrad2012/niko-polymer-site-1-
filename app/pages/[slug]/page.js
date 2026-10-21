import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

export const dynamic = 'force-dynamic';

async function getPage(slug) {
  try {
    return await client.fetch(
      `*[_type == "page" && slug.current == $slug][0]{ title, body }`,
      { slug }
    );
  } catch (err) {
    return null;
  }
}

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);

  if (!page) {
    return (
      <>
        <Nav />
        <section style={{ paddingTop: '150px' }}>
          <div className="eyebrow">صفحه پیدا نشد</div>
          <h1 className="sec-title">این صفحه هنوز از پنل ساخته نشده</h1>
          <p className="sec-desc">
            برو به /studio، یه سند «صفحه» بساز و Slug‌ش رو دقیقاً «{params.slug}» بذار.
          </p>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <section style={{ paddingTop: '150px' }}>
        <div className="eyebrow">صفحه</div>
        <h1 className="sec-title" style={{ marginBottom: '32px' }}>{page.title}</h1>
        <div className="sec-desc" style={{ maxWidth: '720px', lineHeight: 2, fontSize: '1.05rem' }}>
          {page.body ? <PortableText value={page.body} /> : <p>هنوز محتوایی اضافه نشده.</p>}
        </div>
      </section>
      <Footer />
    </>
  );
}
