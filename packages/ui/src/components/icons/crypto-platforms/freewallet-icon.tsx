import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const FreewalletIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "32"} height={height ?? "32"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_8536)">
              <path d="M6.65048 28.8C5.361 28.8 4.37492 28.8 3.19922 28.8C3.19922 20.2984 3.19922 11.7969 3.19922 3.20001C11.5808 3.20001 20.0004 3.20001 28.7233 3.20001C26.7133 5.65285 24.7791 8.01043 22.769 10.4633C24.7032 12.8447 26.6753 15.2499 28.7992 17.8694C21.2519 17.8694 14.046 17.8694 6.65048 17.8694C6.65048 21.5606 6.65048 25.1089 6.65048 28.8ZM6.68841 15.5833C12.1118 15.5833 17.3456 15.5833 22.8069 15.5833C21.3657 13.7972 20.0004 12.1302 18.673 10.5109C20.0762 8.79628 21.4036 7.17694 22.769 5.48615C17.2697 5.48615 11.998 5.48615 6.65048 5.48615C6.68841 8.86775 6.68841 12.1779 6.68841 15.5833Z" fill="#04D0BA" />
          </g>
          <defs>
              <clipPath id="clip0_6557_8536">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.19922 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}