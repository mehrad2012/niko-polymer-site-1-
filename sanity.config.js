import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { projectId, dataset } from './sanity/env';

export default defineConfig({
  name: 'default',
  title: 'نیکو پلیمر اروند',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('محتوا')
          .items([
            // «تنظیمات سایت» یه سند تکیه — رو کلیک، مستقیم فرمش باز می‌شه، بدون نیاز به Create
            S.listItem()
              .title('تنظیمات سایت')
              .id('siteSettings')
              .child(
                S.document().schemaType('siteSettings').documentId('siteSettings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'siteSettings'
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
