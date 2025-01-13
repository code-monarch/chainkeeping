"use client";

import React from 'react'
import JoinUsWidget from '@/pattern/home/templates/join-us-widget'
import SupportHeroSection from '@/pattern/resources/templates/support-hero-section'
import SupportTemp from '@/pattern/resources/templates/support-temp'

const ResourcesPage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-[88px] mb-[144px]'>
      <SupportHeroSection />
      <SupportTemp />
    </div>
  )
}

export default ResourcesPage