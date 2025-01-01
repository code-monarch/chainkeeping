"use client";

import React from 'react'
import Faqs from '@/pattern/who-we-serve/templates/faqs';
import { accountTaxPractitionerFAQs } from '@/lib/data/faqs';
import CompanyHeroSection from '@/pattern/who-we-serve/templates/company-hero-section';
import CompanyInfoSection from '@/pattern/who-we-serve/templates/company-info-section';

const AccountingPractitionersPage = () => {
  return (
    <>
      <CompanyHeroSection />
      <CompanyInfoSection />
      <Faqs faqs={accountTaxPractitionerFAQs} />
    </>
  )
}

export default AccountingPractitionersPage