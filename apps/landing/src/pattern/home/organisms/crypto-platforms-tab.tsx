import React from 'react'
import { cryptoPlatforms } from '@/lib/data/platforms'

const CryptoPlatformsTab = () => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-wrap gap-4'>
      {cryptoPlatforms?.map(({ Icon, name }, idx) => (
        <div key={idx} className='w-[151.5px] md:w-[186px] h-[76.41px] md:h-[88px] flex items-center justify-center gap-2 md:gap-[10px] border rounded-xl'>
          <span>{Icon}</span>
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default CryptoPlatformsTab