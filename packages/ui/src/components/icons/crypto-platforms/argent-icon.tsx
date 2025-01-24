import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const ArgentIcon: FC<IIconProps> = ({ className, color, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_8127)">
              <path d="M19.6977 3.27551H13.1247C12.9053 3.27551 12.7293 3.4746 12.7245 3.72158C12.5918 10.6648 9.36235 17.2556 3.80442 21.9236C3.62769 22.071 3.58711 22.3494 3.7164 22.5508L7.56198 28.5323C7.69264 28.7359 7.94777 28.7815 8.12726 28.6318C11.6029 25.7324 14.3983 22.2342 16.4112 18.3573C18.4248 22.2342 21.2202 25.7324 24.6958 28.6318C24.8753 28.7815 25.1298 28.7359 25.2611 28.5323L29.1067 22.5508C29.2353 22.3494 29.1954 22.071 29.0187 21.9236C23.4607 17.2556 20.2313 10.6648 20.0986 3.72158C20.0938 3.4746 19.9177 3.27551 19.6977 3.27551Z" fill={color ?? "#FF875B"} />
          </g>
          <defs>
              <clipPath id="clip0_6557_8127">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.59766 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}