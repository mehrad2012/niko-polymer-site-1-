// تنظیمات اتصال به Sanity — تنها منبع حقیقت.
// Project ID محرمانه نیست (NEXT_PUBLIC است و تو مرورگر هم دیده می‌شه)، پس مقدار پیش‌فرض داره.
// دلیلش: متغیرهای NEXT_PUBLIC_* موقع «build» داخل کد گذاشته می‌شن؛ اگه روی پاس
// موقع بیلد ست نشده باشن، پنل /studio بدون projectId می‌مونه و آپلود عکس کار نمی‌کنه.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yj9ol59u';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-01-01';
