import React from 'react'
import { cryptoPlatforms } from '@/lib/data/platforms'

const AccountingSoftwaresTab = () => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-wrap gap-4'>
      {cryptoPlatforms?.map(({ Icon, name }, idx) => (
        <div key={idx} className='w-[186px] h-[88px] flex items-center justify-center gap-[10px] border rounded-xl'>
          <span>{Icon}</span>
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default AccountingSoftwaresTab