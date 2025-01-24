import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const SafepalIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "32"} height={height ?? "32"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={cn(className)}>
          <rect x="3.2002" y="3.19995" width="25.6" height="25.6" fill="url(#pattern0_3660_66210)" />
          <defs>
              <pattern id="pattern0_3660_66210" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_3660_66210" transform="scale(0.00333333)" />
              </pattern>
              <image id="image0_3660_66210" width="300" height="300" xlinkHref="data:image/png;base64,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" />
          </defs>
      </svg>

  )
}