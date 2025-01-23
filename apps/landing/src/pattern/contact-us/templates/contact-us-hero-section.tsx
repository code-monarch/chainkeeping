import React from 'react'

const ContactUsHeroSection = () => {
  return (
      <div className='bg-secondary-accent h-fit min-h-[230px] lg:min-h-[300px] w-full flex items-start justify-center pt-[26px] lg:pt-[54px]'>
          <div className='min-h-full h-fit flex flex-col items-start lg:items-center justify-start px-[18px] lg:container'>
              <h1 className='h-[68px] max-w-[546px] text-foreground text-4xl lg:text-[2.75rem] font-rubik font-bold'>Get in touch</h1>
              <p className='max-w-[532px] text-foreground text-base text-left lg:text-center font-dmsans'>Have an inquiry or some feedback? Fill out the form below to reach out to us. Typically, we reply within 24 hours.</p>
          </div>
      </div>
  )
}

export default ContactUsHeroSection