'use client'

import Image from 'next/image'

type ImageProviderProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const ImageProvider = ({
  src,
  alt,
  width = 500,
  height = 500,
}: ImageProviderProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="rounded"
      width={width}
      height={height}
      blurDataURL="data:..."
      placeholder="blur" // Optional blur-up while loading
    />
  )
}
