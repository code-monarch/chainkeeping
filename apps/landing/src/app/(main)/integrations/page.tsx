"use client";

import React from 'react'
import IntegrationsHeroSection from '@/pattern/integrations/templates/integrations-hero-section'
import CryptoPlatformsTemp from '@/pattern/integrations/templates/crypto-platforms-temp';
import JoinUsWidget from '@/pattern/home/templates/join-us-widget';

const IntegrationsPage = () => {
  return (
    <div className='w-full space-y-[64px] mb-[144px] transition-all duration-200 ease-in-out'>
      <IntegrationsHeroSection />
      <CryptoPlatformsTemp />
    </div>
  )
}

export default IntegrationsPage