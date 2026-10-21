export default {
  name: 'product',
  title: 'محصول',
  type: 'document',
  fields: [
    { name: 'title', title: 'عنوان محصول', type: 'string' },
    { name: 'tag', title: 'کد محصول', type: 'string' },
    { name: 'description', title: 'توضیح کوتاه', type: 'text' },
    { name: 'image', title: 'تصویر محصول', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'ترتیب نمایش', type: 'number' },
  ],
  orderings: [
    { title: 'ترتیب نمایش', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag', media: 'image' },
  },
};
