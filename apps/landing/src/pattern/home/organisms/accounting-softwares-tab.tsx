import React from 'react'
import { cryptoPlatforms } from '@/lib/data/platforms'

const AccountingSoftwaresTab = () => {
  return (
    <div className='w-full h-full grid grid-cols-2 md:grid-cols-6 items-center justify-center gap-4'>
      {cryptoPlatforms?.map(({ Icon, name }, idx) => (
        <div key={idx} className='w-[151.5px] md:w-[186px] h-[76.41px] md:h-[88px] flex items-center justify-center gap-2 md:gap-[10px] border rounded-xl'>
          <span>{Icon}</span>
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default AccountingSoftwaresTab