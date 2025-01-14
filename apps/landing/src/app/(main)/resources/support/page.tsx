"use client";

import React from 'react'
import SupportHeroSection from '@/pattern/resources/templates/support-hero-section'
import SupportTemp from '@/pattern/resources/templates/support-temp'

const SupportPage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-12 lg:gap-y-[88px]'>
      <SupportHeroSection />
      <SupportTemp />
    </div>
  )
}

export default SupportPage