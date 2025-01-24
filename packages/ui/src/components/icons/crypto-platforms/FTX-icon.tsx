import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const FTXIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "32"} height={height ?? "32"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_5458)">
              <mask id="mask0_6557_5458" maskUnits="userSpaceOnUse" x="3" y="3" width="26" height="26">
                  <path d="M28.7853 3.20001H3.19922V28.7954H28.7853V3.20001Z" fill="white" />
              </mask>
              <g mask="url(#mask0_6557_5458)">
                  <path d="M16.4475 22.0186H10.5449V28.8053H16.4475V22.0186Z" fill="#89ECF5" />
                  <path d="M21.6844 12.6425H10.5449V19.4291H21.6844V19.4285H23.71V12.6434H21.6844V12.6425Z" fill="#00CBE0" />
                  <path d="M28.8295 3.26902H10.5449V10.0534H28.8295V3.26902Z" fill="#00A8C5" />
                  <path d="M9.18381 12.6425H3.2832V19.4292H9.18381V12.6425Z" fill="#00CBE0" />
              </g>
          </g>
          <defs>
              <clipPath id="clip0_6557_5458">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.19922 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}