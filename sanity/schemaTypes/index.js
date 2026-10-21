import page from './page';
import siteSettings from './siteSettings';
import license from './license';
import factoryPhoto from './factoryPhoto';

// اسکیمای «محصول» عمداً از این لیست حذف شد چون سایت دیگه صفحه محصولات نداره
// (تولید سفارشی برای شرکت‌های دیگه‌ست). فایل sanity/schemaTypes/product.js
// دست‌نخورده مونده، اگه یه‌روز خواستی دوباره فعالش کنی.
export const schemaTypes = [siteSettings, page, license, factoryPhoto];
