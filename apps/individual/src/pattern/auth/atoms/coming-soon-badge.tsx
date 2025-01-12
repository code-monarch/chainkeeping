import React, { FC } from 'react'
import { Badge, Hidden } from '@chainkeeping/ui'

interface IProps {
  status: "live" | "coming-soon"
}

const ComingSoonBadge: FC<IProps> = ({ status }) => {
  return (
    <Hidden isVisible={status === "coming-soon" ? true : false} >
      <Badge className='bg-[hsla(43,93%,66%,1)] w-[78px] h-6 text-foreground text-[10px] font-medium font-dmsans py-1 px-2 ml-[10px] rounded-[100px]'>Coming soon</Badge>
    </Hidden>
  )
}

export default ComingSoonBadge