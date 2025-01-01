"use client"

import React from 'react'
import TaxAuthorityHeroSection from '@/pattern/who-we-serve/templates/tax-authority-hero-section'
import TaxAuthorityInfoSection from '@/pattern/who-we-serve/templates/tax-authority-info-section'
import Faqs from '@/pattern/who-we-serve/templates/faqs'
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