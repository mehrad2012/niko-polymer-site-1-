'use client';
import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export default function FactoryGalleryClient({ photos }) {
  const [index, setIndex] = useState(0);

  if (!photos || photos.length === 0) {
    return <p className="sec-desc">هنوز عکسی از پنل اضافه نشده — از /studio «عکس محیط کارخونه» اضافه کن.</p>;
  }

  const prev = () => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  const photo = photos[index];

  return (
    <div className="factory-slider">
      <div className="factory-slide">
        <Image
          src={urlFor(photo.image).width(1000).height(560).auto('format').url()}
          unoptimized
          alt={photo.caption || 'محیط کارخونه نیکو پلیمر اروند'}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          style={{ objectFit: 'cover' }}
        />
        {photo.caption && <div className="factory-caption">{photo.caption}</div>}
      </div>
      <div className="factory-controls">
        <button onClick={prev} className="factory-nav-btn" aria-label="عکس قبلی">قبلی</button>
        <span className="factory-counter mono">{index + 1} / {photos.length}</span>
        <button onClick={next} className="factory-nav-btn" aria-label="عکس بعدی">بعدی</button>
      </div>
    </div>
  );
}
