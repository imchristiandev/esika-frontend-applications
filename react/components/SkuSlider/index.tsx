import React from 'react'
import { useProduct } from 'vtex.product-context'
import { generateBlockClass } from '@vtex/css-handles'
import { filterByTag } from './utils/utils'
import { SliderLayout } from 'vtex.slider-layout'

import { SkuSliderItem } from './SkuSliderItem'

import { SKUItem, SKUItemImage } from './types/types'
import styles from './styles.css'

export const SkuSlider = ({ blockClass }:any) => {
  const {product} = useProduct();
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
      <SliderLayout
        itemsPerPage={{
          desktop: 4,
          phone: 3,
        }}
        showPaginationDots="never"
        arrowSize={15}
        showNavigationArrows="always"
      >
        {skuSelectorList}
      </SliderLayout>
    </div>:
    null
}
