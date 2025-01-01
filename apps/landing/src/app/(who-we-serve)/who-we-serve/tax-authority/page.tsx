"use client"

import React from 'react'
import TaxAuthorityHeroSection from '@/pattern/solutions/templates/tax-authority-hero-section'
import TaxAuthorityInfoSection from '@/pattern/solutions/templates/tax-authority-info-section'
import Faqs from '@/pattern/solutions/templates/faqs'
import { taxAuthorityFAQs } from '@/lib/data/faqs'

const TaxAuthority = () => {
  return (
    <>
      <TaxAuthorityHeroSection />
      <TaxAuthorityInfoSection />
      <Faqs faqs={taxAuthorityFAQs} />
    </>
  )
}

export default TaxAuthority