import { galleryEntries } from './gallery-entries'
import { galleryAssets } from './generated/gallery-assets'

export const galleryGroups = galleryEntries.map(({ generation, items }) => ({
  generation,
  items: items.map(({ file, alt }) => ({ ...galleryAssets[file], alt })),
}))
