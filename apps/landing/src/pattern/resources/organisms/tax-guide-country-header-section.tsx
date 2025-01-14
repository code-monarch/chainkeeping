import React, { FC } from 'react'
import TaxGuideCountryFlag from '../molecules/tax-guide-country-flag'
import SpiralDots from '../atoms/spiral-dots'

interface IProps {
    country: "Nigeria" | "Ghana"
}

const TaxGuideCountryHeaderSection: FC<IProps> = ({ country }) => {
  return (
      <div className='relative bg-primary w-full h-fit lg:h-[255px] flex flex-col justify-center items-start py-[42px] px-[32px] rounded-[8px]'>
          <div className='w-full space-y-[10px]'>
              <TaxGuideCountryFlag country={country} />
              <h3 className='text-[2rem] text-white font-rubik font-bold'>Crypto Tax Guide, {country}</h3>
          </div>
          <div className='absolute top-0 right-0 w-full h-full'><SpiralDots /></div>
      </div>
  )
}

export default TaxGuideCountryHeaderSection