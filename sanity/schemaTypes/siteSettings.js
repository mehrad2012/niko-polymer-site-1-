export default {
  name: 'siteSettings',
  title: 'تنظیمات سایت',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'لوگوی سایت',
      type: 'image',
      options: { hotspot: true },
      description: 'اگه لوگو نذاری، سایت به‌جاش اسم شرکت رو نشون می‌ده',
    },
    {
      name: 'pageBannerImage',
      title: 'پس‌زمینه بالای صفحات (گواهینامه‌ها، تماس)',
      type: 'image',
      options: { hotspot: true },
      description: 'اختیاریه — اگه بذاری، پشت تیتر این صفحات با یه پوشش تیره نشون داده می‌شه',
    },
    {
      name: 'heroEyebrow',
      title: 'برچسب بالای تیتر اصلی',
      type: 'string',
      description: 'مثلا: تولیدکننده قطعات تزریق پلاستیک',
    },
    {
      name: 'heroTitle',
      title: 'تیتر اصلی صفحه اول',
      type: 'string',
    },
    {
      name: 'heroAccent',
      title: 'کلمه رنگی داخل تیتر',
      type: 'string',
      description: 'مثلا: خودرو — این کلمه با رنگ متفاوت نشون داده می‌شه',
    },
    {
      name: 'heroLead',
      title: 'توضیح زیر تیتر اصلی',
      type: 'text',
    },
    {
      name: 'aboutTitle',
      title: 'تیتر بخش درباره ما',
      type: 'string',
    },
    {
      name: 'aboutText',
      title: 'متن بخش درباره ما',
      type: 'text',
    },
    {
      name: 'contactAddress',
      title: 'آدرس',
      type: 'text',
    },
    {
      name: 'contactPhone',
      title: 'تلفن',
      type: 'string',
    },
    {
      name: 'contactEmail',
      title: 'ایمیل',
      type: 'string',
    },
    {
      name: 'workingHours',
      title: 'ساعات کاری',
      type: 'string',
      description: 'مثلا: شنبه تا چهارشنبه، ۸ تا ۱۷',
    },
    {
      name: 'aboutStatNumber',
      title: 'عدد کارت آماری بخش درباره ما',
      type: 'string',
      description: 'مثلا: ۱۴۰۲ — اگه خالی بذاری همین مقدار پیش‌فرض نشون داده می‌شه',
    },
    {
      name: 'aboutStatLabel',
      title: 'عنوان زیر عدد کارت آماری',
      type: 'string',
      description: 'مثلا: سال آغاز فعالیت',
    },
    {
      name: 'heroSpecs',
      title: 'سه رقم مشخصات زیر تیتر صفحه اول',
      type: 'array',
      description: 'اگه خالی بذاری، همون سه مقدار پیش‌فرض نشون داده می‌شه. ارقام پیش‌فرض نمونه‌ست؛ بعد از تایید کارخونه مقدار واقعی رو اینجا بذار',
      of: [
        {
          type: 'object',
          name: 'heroSpec',
          fields: [
            { name: 'value', title: 'عدد', type: 'string', description: 'مثلا: ±0.02' },
            { name: 'unit', title: 'واحد (اختیاری)', type: 'string', description: 'مثلا: mm یا %' },
            { name: 'label', title: 'عنوان', type: 'string', description: 'مثلا: تلورانس تولید' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'footerCredit',
      title: 'متن «طراحی و توسعه» پایین سایت',
      type: 'string',
      description: 'مثلا: طراحی و توسعه: نام برند شما',
    },
    {
      name: 'navItems',
      title: 'آیتم‌های منو',
      type: 'array',
      description: 'ترتیب همینجا مشخص می‌کنه که تو منو چه چیزی اول بیاد',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            { name: 'label', title: 'عنوان (چیزی که تو منو دیده می‌شه)', type: 'string' },
            {
              name: 'href',
              title: 'آدرس مقصد',
              type: 'string',
              description: 'مثلا: /licenses یا /pages/درباره یا /#contact',
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'تنظیمات سایت' };
    },
  },
};
