"use client";

import React from 'react'
import JoinUsWidget from '@/pattern/home/templates/join-us-widget';
import Faqs from '@/pattern/solutions/templates/faqs';

import AccountPractitionersHeroSection from '@/pattern/solutions/templates/account-practitioners-hero-section';
import AccountPractitionersInfoSection from '@/pattern/solutions/templates/account-practitioners-info-section';

const AccountPractitionersPage = () => {
  return (
    <div className='w-full flex flex-col gap-y-[88px] pb-[144px]'>
      <AccountPractitionersHeroSection />
      <AccountPractitionersInfoSection />
      <Faqs />
      <JoinUsWidget />
    </div>
  )
}

export default AccountPractitionersPage