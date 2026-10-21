export default {
  name: 'license',
  title: 'گواهینامه',
  type: 'document',
  fields: [
    { name: 'title', title: 'عنوان گواهینامه', type: 'string' },
    { name: 'issuer', title: 'صادرکننده', type: 'string' },
    { name: 'description', title: 'توضیح کوتاه', type: 'text' },
    { name: 'image', title: 'تصویر گواهینامه', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'ترتیب نمایش', type: 'number' },
  ],
  orderings: [
    { title: 'ترتیب نمایش', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'issuer', media: 'image' },
  },
};
