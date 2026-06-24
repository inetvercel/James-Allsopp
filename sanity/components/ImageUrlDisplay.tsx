import { useEffect, useState } from 'react'
import { Stack, Text, Button, Card, Code } from '@sanity/ui'
import { CopyIcon } from '@sanity/icons'
import imageUrlBuilder from '@sanity/image-url'

export function ImageUrlDisplay(props: any) {
  const { value } = props
  const [imageUrl, setImageUrl] = useState<string>('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (value?.asset?._ref) {
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'iy5bneed'
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
      
      const builder = imageUrlBuilder({ projectId, dataset })
      const url = builder.image(value).url()
      setImageUrl(url)
    }
  }, [value])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(imageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!imageUrl) return null

  return (
    <Card padding={3} radius={2} shadow={1} tone="primary">
      <Stack space={3}>
        <Text size={1} weight="semibold">
          🔗 Image URL
        </Text>
        <Code size={1} style={{ wordBreak: 'break-all' }}>
          {imageUrl}
        </Code>
        <Button
          icon={CopyIcon}
          text={copied ? 'Copied!' : 'Copy URL'}
          tone={copied ? 'positive' : 'primary'}
          onClick={copyToClipboard}
          mode="ghost"
        />
      </Stack>
    </Card>
  )
}
