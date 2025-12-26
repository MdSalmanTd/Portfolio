'use client';
import React from 'react'
import { ScrollVelocity } from '@/components/ui/ScrollVelocity';

const TextSlide = () => {
  return (
    <div className="text-center px-4 md:px-0 w-full mx-auto">
        <ScrollVelocity
        texts={['Plan · Code · Test · Deploy · Improve ·','Plan · Code · Test · Deploy · Improve ·']}
        velocity={50}
        className="custom-scroll"
      />
      </div>
  )
}

export default TextSlide