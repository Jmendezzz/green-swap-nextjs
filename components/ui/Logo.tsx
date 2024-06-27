import Image from 'next/image'
import React from 'react'

export function Logo() {
  return (
    <Image alt="GreenSwap Logo" src="logo.svg" priority  width={200} height={200} />
  )
}
