import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const LunoIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "32"} height={height ?? "32"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={cn(className)}>
          <rect x="3.2002" y="3.19995" width="25.6" height="25.6" fill="url(#pattern0_3660_66217)" />
          <defs>
              <pattern id="pattern0_3660_66217" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_3660_66217" transform="scale(0.0078125)" />
              </pattern>
              <image id="image0_3660_66217" width="128" height="128" xlinkHref="data:image/png;base64,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" />
          </defs>
      </svg>

  )
}