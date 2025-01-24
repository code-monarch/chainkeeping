import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const AdaliteIcon: FC<IIconProps> = ({ className, color, width, height }) => {
    return (
        <svg width={width ?? "32"} height={height ?? "32"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
            <g clipPath="url(#clip0_6557_5104)">
                <path d="M17.9139 4.80266C18.2015 5.3475 18.3329 5.97205 18.2917 6.59745C18.2505 7.22284 18.0385 7.82105 17.6823 8.31651C17.3262 8.81197 16.8419 9.18246 16.2908 9.38123C15.7396 9.58001 15.1462 9.59812 14.5855 9.4333C14.0248 9.26847 13.5219 8.92807 13.1404 8.45514C12.7589 7.98217 12.5158 7.39786 12.4419 6.776C12.3679 6.15411 12.4665 5.52255 12.725 4.96104C12.9836 4.39953 13.3906 3.93327 13.8946 3.62112C14.2302 3.41325 14.6006 3.2789 14.9845 3.22578C15.3684 3.17267 15.7582 3.20183 16.1316 3.3116C16.505 3.42137 16.8547 3.60959 17.1605 3.86546C17.4664 4.12133 17.7224 4.43982 17.9139 4.80266Z" fill={color ?? "#E72076"} />
                <path d="M23.0122 14.3258C23.3003 14.8707 23.4323 15.4955 23.3914 16.1213C23.3505 16.747 23.1386 17.3457 22.7824 17.8415C22.4262 18.3374 21.9418 18.7081 21.3903 18.907C20.8388 19.1058 20.2451 19.1239 19.6841 18.9587C19.1231 18.7936 18.6201 18.4528 18.2387 17.9793C17.8573 17.5058 17.6145 16.9209 17.5411 16.2987C17.4677 15.6763 17.567 15.0445 17.8263 14.4831C18.0857 13.9216 18.4935 13.4558 18.9983 13.1443C19.676 12.7279 20.4792 12.6185 21.2316 12.84C21.984 13.0615 22.6243 13.5958 23.0122 14.3258Z" fill={color ?? "#E72076"} />
                <path d="M28.1098 23.8549C28.398 24.3998 28.53 25.0246 28.4891 25.6504C28.4482 26.2761 28.2363 26.8748 27.8801 27.3706C27.5239 27.8665 27.0394 28.2372 26.4879 28.4361C25.9365 28.635 25.3427 28.653 24.7817 28.4878C24.2208 28.3227 23.7178 27.9819 23.3364 27.5084C22.9549 27.0349 22.7122 26.45 22.6388 25.8278C22.5654 25.2054 22.6646 24.5736 22.924 24.0122C23.1833 23.4507 23.5912 22.9849 24.0959 22.6734C24.4313 22.4664 24.8013 22.3328 25.1846 22.2802C25.5679 22.2276 25.9571 22.257 26.3298 22.3667C26.7026 22.4765 27.0517 22.6644 27.3571 22.9198C27.6625 23.1751 27.9183 23.4929 28.1098 23.8549Z" fill={color ?? "#E72076"} />
                <path d="M7.16524 17.0729C6.95375 17.4716 6.85657 17.9288 6.88602 18.387C6.91546 18.8452 7.07023 19.2837 7.33069 19.647C7.59119 20.0102 7.94567 20.282 8.34935 20.4279C8.75302 20.5738 9.18775 20.5872 9.59848 20.4665C10.0093 20.3458 10.3776 20.0964 10.6569 19.7498C10.9363 19.4032 11.114 18.975 11.1678 18.5194C11.2214 18.0638 11.1487 17.6012 10.9587 17.1902C10.7687 16.7792 10.47 16.4382 10.1004 16.2104C9.85529 16.0585 9.5848 15.9603 9.30448 15.9214C9.02413 15.8825 8.73942 15.9038 8.46671 15.9839C8.19403 16.0641 7.93865 16.2015 7.71531 16.3884C7.49197 16.5753 7.30505 16.8079 7.16524 17.0729Z" fill={color ?? "#E72076"} />
                <path d="M3.39758 26.2535C3.25108 26.5263 3.18315 26.8401 3.20243 27.1548C3.2217 27.4694 3.32732 27.7708 3.50583 28.0205C3.68434 28.2702 3.92769 28.457 4.20488 28.557C4.48208 28.6571 4.78061 28.6659 5.06247 28.5823C5.34433 28.4988 5.59677 28.3267 5.78769 28.0879C5.9786 27.8491 6.09934 27.5544 6.13455 27.2414C6.16975 26.9283 6.11784 26.6111 5.9854 26.3299C5.85296 26.0488 5.64599 25.8165 5.39083 25.6627C5.05322 25.4592 4.65496 25.407 4.28203 25.5176C3.9091 25.6281 3.59142 25.8924 3.39758 26.2535Z" fill={color ?? "#E72076"} />
            </g>
            <defs>
                <clipPath id="clip0_6557_5104">
                    <rect width="25.6" height="25.6" fill="white" transform="translate(3.19922 3.20001)" />
                </clipPath>
            </defs>
        </svg>

    )
}