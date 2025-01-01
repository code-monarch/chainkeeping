"use client";

import React from 'react'
import { individualFAQs } from '@/lib/data/faqs'
import Faqs from '@/pattern/who-we-serve/templates/faqs'
import TaxComputationHeroSection from '@/pattern/who-we-serve/templates/tax-computation-hero-section'
import TaxComputationInfoSection from '@/pattern/who-we-serve/templates/tax-computation-info-section'

const IndividualPage = () => {
  return (
    <>
      <TaxComputationHeroSection />
      <TaxComputationInfoSection />
      <Faqs faqs={individualFAQs} />
    </>
  )
}

export default IndividualPage