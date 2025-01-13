import React from 'react'

const AboutHeroSection = () => {
  return (
      <div className='bg-secondary-accent min-h-[300px] h-fit w-full flex items-start justify-center pt-[54px]'>
          <div className='min-h-full h-fit flex flex-col items-start lg:items-center justify-start px-[18px] lg:container'>
              <h1 className='h-[68px] max-w-[546px] text-foreground text-left lg:text-center text-[2.75rem] font-rubik font-bold'>About Us</h1>
              <p className='w-full max-w-[339px] lg:max-w-[732px] text-foreground text-base text-left lg:text-center font-dmsans'>Our goal is to make your crypto taxation and accounting as seamless and stress free as possible, we offer reliable and accurate crypto tax solutions for individuals, businesses, accountants and government.</p>
          </div>
      </div>
  )
}

export default AboutHeroSection