import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import { useProductDispatch, useProduct } from 'vtex.product-context'

import { SKUSelector } from './types/types'

import styles from './styles.css'

export const SkuSliderItem = ({ image, blockClass, productVariation }: SKUSelector) => {
  const skuSelectorItem = generateBlockClass(styles["sku__item"], blockClass)
  const { selectedItem, product } = useProduct()
  const dispatch = useProductDispatch()

  const stopBubblingUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({
      type: "SET_SELECTED_ITEM",
      args: {
        item: productVariation
      }
    })
    console.log("Item Selected", selectedItem, product);

  }

  return (
    <div onClick={stopBubblingUp}>
      <img src={image} className={skuSelectorItem}/>
    </div>
  )
}
