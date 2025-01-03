"use client";

import React from 'react'
import ContactUsHeroSection from '@/pattern/contact-us/templates/contact-us-hero-section';
import JoinUsWidget from '@/pattern/home/templates/join-us-widget';
import ContactForm from '@/pattern/contact-us/templates/contact-us-form';

const ContactUsPage = () => {
  return (
    <>
      <div className='relative w-full'>
        <ContactUsHeroSection />
        <div className='absolute top-[223px] left-1/2 -translate-x-1/2'>
          <ContactForm />
        </div>
      </div>
      <div className='w-full mt-[700px] mb-[144px]'>
        <JoinUsWidget />
      </div>
    </>
  )
}

export default ContactUsPage