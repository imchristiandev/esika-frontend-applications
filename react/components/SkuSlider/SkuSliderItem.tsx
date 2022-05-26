import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import { ProductSummaryContext } from 'vtex.product-summary-context'
import type {ProductSummaryTypes} from 'vtex.product-summary-context'

import { SKUSelector } from './types/types'

import styles from './styles.css'

// Shelf context
const { useProductSummary, useProductSummaryDispatch } = ProductSummaryContext

type Item = {
  itemId: string
}

export const SkuSliderItem = ({ image, blockClass, productVariation }: SKUSelector) => {

  //CSS Handle for item
  const skuSelectorItem = generateBlockClass(styles["sku__item"], blockClass)

  const { product: productSummary } = useProductSummary()
  const dispatch = useProductSummaryDispatch()

  // Click event bubbling that stops the product page redirection.
  const stopBubblingUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  // Method that handles the click for the item.
  const handleSkuSelected: React.MouseEventHandler<HTMLDivElement> = (e) => {
    stopBubblingUp(e)

    // Construction of necessary data to dispatch the new selected SKU
    const selectedItem =
    productSummary?.items &&
    (
      productSummary.items.find(
        (item: Item) => item.itemId === productVariation.itemId
      ) as ProductSummaryTypes.SKU
    )

    const sku = {
      ...selectedItem,
      image: selectedItem.images[0]
    }

    const newProduct = {
      ...productSummary,
      selectedItem,
      sku,
    }

    // Shelf context dispatch
    dispatch({
      type: 'SET_PRODUCT',
      args: { product: newProduct },
    })
  }

  return (
    <div onClick={handleSkuSelected}>
      <img src={image} className={skuSelectorItem}/>
    </div>
  )
}
