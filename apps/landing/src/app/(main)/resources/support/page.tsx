"use client";

import React from 'react'
import SupportHeroSection from '@/pattern/resources/templates/support-hero-section'
import SupportTemp from '@/pattern/resources/templates/support-temp'
import JoinUsWidget from '@/pattern/home/templates/join-us-widget';

const SupportPage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-[88px] mb-[144px]'>
      <SupportHeroSection />
      <SupportTemp />
      <JoinUsWidget />
    </div>
  )
}

export default SupportPage