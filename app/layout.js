import { Vazirmatn, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazir',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: 'تولیدکننده قطعات تزریق پلاستیک و بست‌های ایمنی خودرو، مطابق استاندارد صنعت خودرو.',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: 'تولیدکننده قطعات تزریق پلاستیک و بست‌های ایمنی خودرو.',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'تولیدکننده قطعات تزریق پلاستیک و بست‌های ایمنی خودرو.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
