export default {
  name: 'factoryPhoto',
  title: 'عکس محیط کارخونه',
  type: 'document',
  fields: [
    { name: 'caption', title: 'توضیح کوتاه (اختیاری)', type: 'string' },
    { name: 'image', title: 'عکس', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'ترتیب نمایش', type: 'number' },
  ],
  orderings: [
    { title: 'ترتیب نمایش', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'caption', media: 'image' },
  },
};
