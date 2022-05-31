import React, { ReactNode } from 'react'

type SkuSliderType = {
  children: ReactNode
}

export const SkuSliderContainer = ({children}: SkuSliderType) => {
  return (
    <>
      <p>El webomio está prendio</p>
      <div>
        {children}
      </div>
    </>
  )
}
