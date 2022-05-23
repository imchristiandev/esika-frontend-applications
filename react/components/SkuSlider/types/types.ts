export type SKUItemImage = {
  cacheId: string
  imageId: string
  imageLabel: string
  imageTag: string
  imageText: string
  imageUrl: string
}

export type SKUItem = {
  complementName: string
  ean: string
  images: SKUItemImage[]
  itemId: string
  measurementUnit: string
  name: string
  nameComplete: string
  referenceId: any[]
  sellers: any[]
  unitMultiplier: 1
  variations: any
}

export type SKUSelector = {
  image: string
  blockClass: string
  productVariation: any
}
