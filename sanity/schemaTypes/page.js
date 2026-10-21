export default {
  name: 'page',
  title: 'صفحه',
  type: 'document',
  fields: [
    { name: 'title', title: 'عنوان صفحه', type: 'string' },
    {
      name: 'slug',
      title: 'آدرس صفحه (Slug)',
      type: 'slug',
      options: { source: 'title' },
      description: 'مثلا برای صفحه "استخدام" این می‌شه estekhdam و آدرس نهایی می‌شه سایت/pages/estekhdam',
    },
    {
      name: 'body',
      title: 'محتوای صفحه',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: { title: 'title' },
  },
};
