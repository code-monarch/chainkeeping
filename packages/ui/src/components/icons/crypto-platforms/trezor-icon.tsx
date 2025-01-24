import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const TrezorIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_10755)">
              <path d="M24.3904 9.1265C24.3904 5.88832 20.4651 3.20001 15.6864 3.20001C10.9078 3.20001 6.98244 5.88832 6.98244 9.1265V11.0205H3.39844V24.6454L15.6864 28.7389L27.9744 24.6454V11.0816H24.3904V9.1265ZM11.4198 9.1265C11.4198 7.59906 13.2971 6.3771 15.6864 6.3771C18.0758 6.3771 19.9531 7.59906 19.9531 9.1265V11.0205H11.4198V9.1265ZM23.0251 22.4458L15.6864 24.8897L8.34777 22.4458V14.2587H23.0251V22.4458Z" fill="black" />
          </g>
          <defs>
              <clipPath id="clip0_6557_10755">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.39844 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}