import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const NexoIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_9826)">
              <path d="M10.444 3.36725L22.9956 11.7294V20.2587L3.80078 7.46468L9.95244 3.36725C10.0279 3.3202 10.1124 3.29556 10.1982 3.29556C10.284 3.29556 10.3684 3.3202 10.444 3.36725Z" fill="#3CA9E5" />
              <path d="M22.9937 3.20001L16.5938 7.46469L22.9937 11.7294V3.20001Z" fill="#2853C3" />
              <path d="M22.9961 3.20001L29.1529 7.29745C29.227 7.34945 29.2885 7.4221 29.3319 7.50872C29.3753 7.59534 29.3992 7.69316 29.4013 7.7932V24.5174L22.9961 20.2587V3.20001Z" fill="#1A4199" />
              <path d="M29.3952 24.5234L23.2436 28.6208C23.1649 28.6732 23.0757 28.7008 22.9849 28.7008C22.894 28.7008 22.8048 28.6732 22.7262 28.6208L10.1797 20.2587V11.7174L29.3952 24.5234Z" fill="#2853C3" />
              <path d="M3.80079 7.46469V24.1889C3.80027 24.292 3.82287 24.3935 3.86639 24.4835C3.9099 24.5735 3.97286 24.649 4.04913 24.7026L10.2008 28.8V11.7174L3.80079 7.46469Z" fill="#60BEFF" />
              <path d="M10.1992 28.7881L16.594 24.5234L10.1992 20.2587V28.7881Z" fill="#3CA9E5" />
          </g>
          <defs>
              <clipPath id="clip0_6557_9826">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.80078 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}