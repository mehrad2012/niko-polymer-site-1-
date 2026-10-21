import { client } from '@/sanity/lib/client';
import FactoryGalleryClient from './FactoryGalleryClient';

async function getPhotos() {
  try {
    const result = await client.fetch(
      `*[_type == "factoryPhoto"] | order(order asc){ _id, caption, image }`
    );
    return result || [];
  } catch (err) {
    return [];
  }
}

export default async function FactoryGallery() {
  const photos = await getPhotos();

  return (
    <section id="factory">
      <div className="eyebrow">محیط کارخونه</div>
      <h2 className="sec-title">نگاهی به خط تولید</h2>
      <p className="sec-desc">تصاویری از فضای تولید، تجهیزات، و خط تزریق پلاستیک.</p>
      <FactoryGalleryClient photos={photos} />
    </section>
  );
}
