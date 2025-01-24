import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const AtomicWalletIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_10024)">
              <path d="M29.402 28.8C28.0314 28.3059 26.4538 27.7593 25.0931 27.2337C24.903 27.1601 24.7429 26.8868 24.6629 26.6661C22.6319 20.8949 20.6209 15.1237 18.5999 9.36306C18.4698 8.98463 18.3197 8.60621 18.1096 8.26982C17.5193 7.33422 16.2687 7.33422 15.6684 8.25929C15.4683 8.57466 15.3182 8.9426 15.1982 9.30001C13.1772 15.0501 11.1662 20.8108 9.1652 26.5609C9.02511 26.9709 8.835 27.2232 8.41481 27.3599C7.28425 27.7278 6.1737 28.1588 5.05315 28.5688C4.85305 28.6423 4.65295 28.7054 4.38281 28.7895C4.43284 28.5898 4.45285 28.4846 4.49287 28.369C6.90406 21.4626 9.31526 14.5561 11.7465 7.66012C12.4768 5.5787 13.7775 4.07547 15.9585 3.68652C18.7199 3.20296 21.0111 4.73773 22.0616 7.74419C24.3627 14.3353 26.6739 20.9264 28.985 27.5175C29.0451 27.6752 29.2051 28.1807 29.2051 28.1807L29.402 28.8Z" fill="url(#paint0_linear_6557_10024)" />
              <path d="M20.1333 20.7057C20.1434 22.5873 18.7127 24.1011 16.9418 24.1011C15.1909 24.1011 13.7702 22.6084 13.7502 20.7582C13.7302 18.8976 15.1709 17.3733 16.9518 17.3733C18.7027 17.3628 20.1233 18.8555 20.1333 20.7057Z" fill="url(#paint1_linear_6557_10024)" />
          </g>
          <defs>
              <linearGradient id="paint0_linear_6557_10024" x1="16.8008" y1="28.7318" x2="16.8008" y2="3.50066" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2090FB" />
                  <stop offset="1" stopColor="#41C1FE" />
              </linearGradient>
              <linearGradient id="paint1_linear_6557_10024" x1="16.9356" y1="28.7318" x2="16.9356" y2="3.50064" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2090FB" />
                  <stop offset="1" stopColor="#41C1FE" />
              </linearGradient>
              <clipPath id="clip0_6557_10024">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(4 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}