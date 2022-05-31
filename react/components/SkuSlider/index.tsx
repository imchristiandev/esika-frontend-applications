import React from 'react'
import { ProductSummaryContext } from 'vtex.product-summary-context'
import { generateBlockClass } from '@vtex/css-handles'
import { filterByTag } from './utils/utils'

import { SkuSliderItem } from './SkuSliderItem'

import { SKUItem, SKUItemImage } from './types/types'
import styles from './styles.css'

type SkuSlider = {
  blockClass: string
}

const { useProductSummary } = ProductSummaryContext

export const SkuSlider = ({ blockClass }: SkuSlider) => {
  const { product } = useProductSummary()
  const skuSelector = generateBlockClass(styles.sku, blockClass);
  console.log("Product items", product.items)
  const skuSelectorList = product?.items.map((item:SKUItem) => {
    const itemImage = item.images.filter((image: SKUItemImage) => (
      filterByTag(image)
    ))

    return itemImage.length !== 0 ?
      <SkuSliderItem
        image={itemImage[0].imageUrl}
        blockClass={blockClass}
        productVariation={item}
      /> :
      null
  })

  return (skuSelectorList.length > 0) ?
    <div className={skuSelector}>
      {skuSelectorList}
    </div>:
    null
}
