"use client";

import React from 'react'
import PricingHeroSection from '@/pattern/pricing/templates/pricing-hero-section'
import PricingTabs from '@/pattern/pricing/templates/pricing-tabs';
import Faqs from '@/pattern/who-we-serve/templates/faqs';
import { pricingFAQs } from '@/lib/data/faqs';

const PricingPage = () => {
  return (
    <>
      <PricingHeroSection />
      <PricingTabs />
      <div className='w-full my-[144px]'>
        <Faqs faqs={pricingFAQs} />
      </div>
    </>
  )
}

export default PricingPage