import React, { FC, ReactNode } from 'react'

interface IProps {
    lastUpdate: string
}

const LastUpdatedWidget: FC<IProps> = ({ lastUpdate }) => {
    return (
        <div className='bg-[hsla(204,33%,97%,1)] min-w-[215px] w-fit h-[43px] text-base text-foreground whitespace-nowrap font-rubik rounded-[2px] p-3'>Last updated: {lastUpdate}</div>
    )
}

export default LastUpdatedWidget