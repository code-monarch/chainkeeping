import React from 'react'
import { Button } from '@chainkeeping/ui'
import ListItemIcon from '../atoms/list-item-icon'

const featuresAtGlance = [
    "Unified Client Dashboard",
    "Easy transaction record",
    "Automated Operations"
]

const AccountPractitionersHeroSection = () => {
  return (
      <section className="bg-primary bg-pattern-bg-img bg-cover bg-center w-full h-[345px]">
          <div className='w-full h-full md:container flex flex-col items-start justify-center gap-y-3'>
              <div className='flex items-center gap-[112px]'>
                  <div className='w-full max-w-[564px] h-[152px] flex flex-col gap-y-1'>
                      <h3 className='text-white text-[2.75rem] leading-[52.14px] font-rubik font-bold'>For Accounting practitioners</h3>
                      <p className='text-white text-base font-dmsans'>One-stop solution to manage your crypto clients' taxes and accounting.</p>
                  </div>

                  <div className='w-[264px] h-full flex flex-col gap-y-4'>
                      <h5 className='text-white text-2xl whitespace-nowrap font-medium font-rubik'>Features at a glance</h5>
                      <ul className='w-full flex flex-col gap-y-4'>
                          {featuresAtGlance.map((item, idx) => (
                              <li key={idx} className='flex items-center gap-3'>
                                  <ListItemIcon />
                                  <span className='font-rubik font-normal text-base text-white'>{item}</span></li>
                          ))}
                      </ul>
                  </div>
              </div>
              <Button size='lg' variant="secondary" >Get started</Button>
          </div>
      </section>
  )
}

export default AccountPractitionersHeroSection