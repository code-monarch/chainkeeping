import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const XapoIcon: FC<IIconProps> = ({ className, width, height }) => {
    return (
        <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
            <g clipPath="url(#clip0_6557_8171)">
                <path d="M27.5034 4.45275C26.9514 5.3682 26.4683 6.18895 25.9623 6.94658C24.3522 9.40883 22.7422 11.9027 21.0861 14.3018C20.4881 15.1857 20.4421 15.7223 21.0632 16.6062C23.5472 20.2049 25.9623 23.8667 28.4004 27.497C28.5844 27.7495 28.7224 28.0652 28.9524 28.4755C28.6764 28.6018 28.4694 28.7597 28.2854 28.7597C26.0313 28.7912 23.7542 28.8228 21.5001 28.7281C21.0401 28.6965 20.4881 28.2545 20.1661 27.781C18.878 25.8555 17.636 23.8667 16.2559 21.6885C15.4739 22.8881 14.7609 23.9299 14.0939 25.0347C11.8168 28.7597 11.8168 28.7597 8.25163 28.7597C6.73357 28.7597 5.19251 28.7597 3.39844 28.7597C3.74345 28.1283 3.92746 27.7495 4.13446 27.4338C6.50356 23.8035 8.89565 20.2049 11.3568 16.6378C11.9318 15.7854 12.0468 15.2488 11.4257 14.3018C9.58568 11.6186 7.83761 8.80905 6.04354 6.06269C5.74453 5.58917 5.49152 5.11567 5.0545 4.35805C5.62952 4.23178 5.97454 4.13708 6.34255 4.10551C8.18262 4.07394 10.0227 3.97924 11.8628 4.16864C12.5298 4.23178 13.2888 4.76842 13.8178 5.39977C14.6689 6.4415 15.3589 7.70419 16.2099 9.06159C17.084 7.70419 17.866 6.40993 18.717 5.24194C19.062 4.76842 19.5911 4.20021 20.0281 4.16864C22.2822 4.07394 24.5593 4.10551 26.8134 4.13708C26.9974 4.13708 27.1584 4.29491 27.5034 4.45275Z" fill="#FF3B30" />
            </g>
            <defs>
                <clipPath id="clip0_6557_8171">
                    <rect width="25.6" height="25.6" fill="white" transform="translate(3.39844 3.20001)" />
                </clipPath>
            </defs>
        </svg>

    )
}