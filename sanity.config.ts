import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'James Allsopp Site',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'iy5bneed',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Media at the top for easy uploads
            S.listItem()
              .title('📷 Media')
              .child(S.documentTypeList('media').title('All Media')),
            S.divider(),
            // All other document types except media
            ...S.documentTypeListItems().filter(
              (listItem) => !['media', 'sanity.imageAsset', 'sanity.fileAsset'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
