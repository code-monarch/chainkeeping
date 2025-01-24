import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const BlockioIcon: FC<IIconProps> = ({ className, width, height }) => {
    return (
        <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
            <g clipPath="url(#clip0_6557_10139)">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.8666 3.20001H4V28.8H29.6V11.8667H20.8666V3.20001ZM29.6 3.20001H25.2V7.60001H29.6V3.20001Z" fill="url(#paint0_linear_6557_10139)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_6557_10139" x1="16.8" y1="3.20001" x2="16.8" y2="28.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#021A37" />
                    <stop offset="1" stopColor="#043772" />
                </linearGradient>
                <clipPath id="clip0_6557_10139">
                    <rect width="25.6" height="25.6" fill="white" transform="translate(4 3.20001)" />
                </clipPath>
            </defs>
        </svg>

    )
}