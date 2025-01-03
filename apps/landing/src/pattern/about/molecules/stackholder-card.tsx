import React, { FC } from 'react'
import { Card, CardContent } from '@chainkeeping/ui'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface IProps {
    image: string | StaticImport
    name: string
    position: string
}

const StakeholderCard: FC<IProps> = ({ image, name, position }) => {
  return (
      <Card className="w-[282px] min-h-[365px] h-fit border-2 border-accent !p-0">
          <CardContent className="space-y-[16px] !p-0">
              <div className="relative w-full h-[294px]">
                  <Image src={image} alt="Stakeholder image" fill
                      className="object-cover"
 />
              </div>
              <div className="p-3 space-y-[12px]">
                  <h3 className="font-rubik font-semibold text-lg text-foreground">
                      {name}
                  </h3>
                  <p className="text-base text-gray-600">
                      {position}
                  </p>
              </div>
          </CardContent>
      </Card>
  )
}

export default StakeholderCard