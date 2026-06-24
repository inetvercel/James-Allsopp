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
            // Add Media Library to top of menu
            S.listItem()
              .title('📷 Media Library')
              .child(
                S.documentList()
                  .title('All Images')
                  .filter('_type == "sanity.imageAsset"')
                  .menuItems([
                    S.menuItem()
                      .title('Upload Image')
                      .icon(() => '⬆️')
                      .action(() => {
                        // This will be handled by the asset source
                      })
                  ])
              ),
            S.divider(),
            // All other document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['sanity.imageAsset', 'sanity.fileAsset'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
