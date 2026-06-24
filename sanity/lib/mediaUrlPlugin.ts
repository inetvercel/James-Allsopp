import { definePlugin } from 'sanity'
import imageUrlBuilder from '@sanity/image-url'

export const mediaUrlPlugin = definePlugin({
  name: 'media-url-plugin',
  document: {
    actions: (prev, context) => {
      // Add custom logic to auto-populate image URL
      return prev
    },
  },
  form: {
    image: {
      assetSources: (prev) => prev,
    },
  },
})

// Helper to generate image URL
export function getImageUrl(source: any, projectId: string, dataset: string) {
  const builder = imageUrlBuilder({ projectId, dataset })
  return builder.image(source).url()
}
