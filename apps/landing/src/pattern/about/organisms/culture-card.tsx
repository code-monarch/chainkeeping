import React, { FC, ReactElement } from 'react'
import { Card, CardContent, CardHeader, cn } from '@chainkeeping/ui'

interface IProps {
    icon: ReactElement
    header: string
    description: string
    className?: string;
}

const CultureCard: FC<IProps> = ({ description, header, icon, className }) => {
  return (
      <Card className={cn("bg-blue-50 min-w-[282px] w-full p-8 border-none", className)}>
          <CardHeader className="mb-[12px]">
              {icon}
          </CardHeader>
          <CardContent className="w-full max-w-[524px] space-y-[12px] !mt-0">
              <h3 className="font-medium font-rubik text-2xl">
                  {header}
              </h3>
              <p className="text-sm text-gray-600">
                  {description}
              </p>
          </CardContent>
      </Card>
  )
}

export default CultureCard