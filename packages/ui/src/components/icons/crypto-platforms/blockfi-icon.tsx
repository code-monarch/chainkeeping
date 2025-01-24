import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const BlockfiIcon: FC<IIconProps> = ({ className, width, height }) => {
    return (
        <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
            <g clipPath="url(#clip0_6557_2151)" >
                <mask id="mask0_6557_2151" maskUnits="userSpaceOnUse" x="3" y="3" width="27" height="26">
                    <path d="M29.3741 3.20001H3.80078V28.6487H29.3741V3.20001Z" fill="white" />
                </mask>
                <g mask="url(#mask0_6557_2151)">
                    <mask id="mask1_6557_2151" maskUnits="userSpaceOnUse" x="3" y="3" width="27" height="26">
                        <path d="M12.8181 4.62874L5.33058 12.0795C4.31043 13.0729 3.79073 14.3911 3.77148 15.7093V15.8622C3.79073 17.1804 4.31043 18.4986 5.33058 19.5111L12.8373 26.9428C14.8969 29.006 18.246 29.006 20.3248 26.9428L27.8123 19.492C29.8911 17.4478 29.8911 14.1237 27.8123 12.0604L20.3248 4.62874C19.2854 3.5971 17.9381 3.08128 16.5715 3.08128C15.2048 3.08128 13.8575 3.5971 12.8181 4.62874Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_6557_2151)">
                        <path d="M16.8211 -9.89066L42.9407 16.0341L16.8211 41.9589L-9.2793 16.0341L16.8211 -9.89066Z" fill="url(#paint0_linear_6557_2151)" />
                    </g>
                    <mask id="mask2_6557_2151" maskUnits="userSpaceOnUse" x="10" y="9" width="13" height="14">
                        <path d="M14.6853 10.2072L10.9319 13.9326C9.89249 14.9643 9.89249 16.6263 10.9319 17.658L14.6853 21.3834C15.7247 22.415 17.3992 22.415 18.4386 21.3834L22.192 17.658C23.2314 16.6263 23.2314 14.9643 22.192 13.9326L18.4386 10.2072C17.9189 9.69142 17.2453 9.44306 16.5716 9.44306C15.8979 9.42396 15.205 9.69142 14.6853 10.2072Z" fill="white" />
                    </mask>
                    <g mask="url(#mask2_6557_2151)">
                        <path d="M22.0956 5.77522L26.8307 21.288L11.028 26.0451L6.29297 10.5131L22.0956 5.77522Z" fill="url(#paint1_linear_6557_2151)" />
                    </g>
                </g>
            </g>
            <defs>
                <linearGradient id="paint0_linear_6557_2151" x1="9.10298" y1="8.37264" x2="23.9283" y2="23.3094" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BDE7F4" />
                    <stop offset="1" stopColor="#00C1E0" />
                </linearGradient>
                <linearGradient id="paint1_linear_6557_2151" x1="14.4384" y1="8.90701" x2="18.3406" y2="21.8933" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00315B" />
                    <stop offset="1" stopColor="#045087" />
                </linearGradient>
                <clipPath id="clip0_6557_2151">
                    <rect width="25.6" height="25.6" fill="white" transform="translate(3.80078 3.20001)" />
                </clipPath>
            </defs>
        </svg>

    )
}