"use client";

import React from 'react'
import AboutHeroSection from '@/pattern/about/templates/about-hero-section'
import JoinUsWidget from '@/pattern/home/templates/join-us-widget'
import OurStorySection from '../../../pattern/about/templates/our-story-section';
import OurCulture from '@/pattern/about/templates/our-culture';
import CompanyStatementsSection from '@/pattern/about/templates/company-statements-section';
import OurPartnersSection from '@/pattern/about/templates/our-partners-section';
import CompanyOrganogram from '@/pattern/about/templates/company-organogram';

const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <OurCulture />
      <CompanyStatementsSection />
      <CompanyOrganogram />
      <div className='w-full' id="partnership">
        <OurPartnersSection />
      </div>
    </>
  )
}

export default AboutPage