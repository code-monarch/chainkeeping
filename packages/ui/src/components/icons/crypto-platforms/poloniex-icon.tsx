import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const PoloniexIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_5821)">
              <path d="M27.076 9.56199L27.0688 15.7316L21.7256 12.6432L16.3867 9.55041L21.7372 6.47505L27.0818 3.39243L27.076 9.56199Z" fill="#182C21" />
              <path d="M16.3793 15.7185L16.3735 21.8881L11.0361 18.7997L5.69727 15.7055L11.0419 12.6316L16.3866 9.55041L16.3793 15.7185Z" fill="#005C30" />
              <path d="M5.70306 9.5374L5.70884 3.36784L11.0477 6.46204L16.3851 9.55045L11.0405 12.6316L5.69727 15.7055L5.70306 9.5374Z" fill="#489B65" />
              <path d="M5.68352 21.875L5.69655 15.7055L11.0354 18.7997L16.3728 21.8881L11.0282 24.9692L5.67773 28.0446L5.68352 21.875Z" fill="#182C21" />
              <path d="M21.7249 12.6432L16.3861 9.55041L16.3788 15.7185L16.373 21.8881L21.7119 24.9823L27.0493 28.0707L27.0566 21.9011L27.0681 15.7316L21.7249 12.6432Z" fill="#489B65" />
          </g>
          <defs>
              <clipPath id="clip0_6557_5821">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(4 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}