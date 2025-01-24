import { cn } from '@/lib/utils'
import { FC } from 'react'
import { IIconProps } from '../types'

export const SwipeIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_8519)">
              <path d="M16.6006 28.7996C23.6697 28.7996 29.4004 23.0689 29.4004 15.9998C29.4004 8.93067 23.6697 3.20001 16.6006 3.20001C9.53144 3.20001 3.80078 8.93067 3.80078 15.9998C3.80078 23.0689 9.53144 28.7996 16.6006 28.7996Z" fill="url(#paint0_linear_6557_8519)" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16.1353 7.8176C15.3921 7.90325 14.7011 8.24235 14.1786 8.7778C13.7863 9.1662 13.4148 9.56495 13.0173 9.95723C12.8184 10.1614 12.6173 10.3599 12.4161 10.5614C12.215 10.7629 11.9932 10.977 11.7844 11.1884C11.5755 11.3999 11.402 11.5855 11.2087 11.7818C10.9066 12.0839 10.6045 12.386 10.3024 12.6911C10.0707 12.9306 9.84411 13.1779 9.61496 13.417C9.47988 13.5598 9.33445 13.6923 9.20714 13.8425C8.68176 14.4835 8.39461 15.2867 8.39453 16.1155C8.39453 16.1642 8.39453 16.2143 8.39755 16.2626C8.4083 16.7385 8.53321 17.2049 8.76178 17.6224C8.8919 17.8748 9.04259 18.116 9.21232 18.3435C9.32452 18.5015 9.40609 18.4989 9.55368 18.3768C9.58187 18.3533 9.60827 18.3278 9.63265 18.3004C9.77808 18.1472 9.92049 17.9944 10.0685 17.8417C10.2774 17.6224 10.4914 17.4036 10.7003 17.1818C10.9092 16.96 11.1357 16.7157 11.355 16.4866C11.4594 16.3744 11.5707 16.2708 11.676 16.1603C11.9 15.9234 12.1192 15.6792 12.3432 15.4448C12.5672 15.2105 12.7942 14.9913 13.0134 14.7621C13.2326 14.533 13.5024 14.2524 13.7492 13.9978C13.9961 13.7432 14.2054 13.5292 14.4345 13.2948C14.7327 12.9863 15.0231 12.6704 15.3183 12.3623C15.5017 12.1737 15.6903 11.9929 15.8737 11.8069C16.1283 11.5522 16.3653 11.2976 16.6151 11.043C16.865 10.7884 17.0506 10.6175 17.2646 10.3983C17.7431 9.91494 18.2208 9.42872 18.6978 8.93963C18.7286 8.90927 18.7574 8.87698 18.7841 8.84297C18.9015 8.69494 18.9114 8.66215 18.7664 8.55771C18.545 8.38328 18.3079 8.22971 18.0582 8.09897C17.6169 7.89257 17.1356 7.78561 16.6484 7.78567H16.6242C16.4615 7.7857 16.2989 7.79593 16.1374 7.81631L16.1348 7.81372L16.1353 7.8176ZM20.3511 10.9532H20.3204C20.1114 10.9533 19.9049 10.999 19.7153 11.087C19.5257 11.175 19.3575 11.3033 19.2226 11.4629C19.1984 11.4896 19.1729 11.5151 19.1462 11.5393L18.3668 12.3036C18.1122 12.5586 17.8369 12.8361 17.5693 13.1037C17.3479 13.325 17.1261 13.5417 16.9073 13.7635C16.6885 13.9853 16.4537 14.2322 16.2168 14.4639C15.9799 14.6957 15.7279 14.9386 15.4832 15.1773L14.6145 16.0533L12.9996 17.6686C12.2861 18.385 11.5736 19.0999 10.8621 19.8134C10.7249 19.9485 10.7223 19.9662 10.8621 20.1112C11.2035 20.4564 11.55 20.7991 11.881 21.1469C12.0858 21.364 12.3561 21.508 12.6505 21.5569C12.9282 21.6127 13.2152 21.6031 13.4886 21.5288C13.6934 21.4782 13.8824 21.3775 14.0388 21.2358L14.8846 20.4189C15.0831 20.2281 15.2847 20.0395 15.4806 19.8458C15.8729 19.4574 16.26 19.0664 16.6522 18.6806C16.9707 18.3673 17.297 18.0566 17.6202 17.7433L18.9464 16.4508C19.3589 16.0455 19.7741 15.6382 20.1918 15.2329C20.2197 15.1915 20.2583 15.1586 20.3036 15.1376C20.3488 15.1167 20.399 15.1085 20.4486 15.1141C20.4981 15.1197 20.5452 15.1387 20.5847 15.1692C20.6242 15.1996 20.6546 15.2403 20.6726 15.2869C20.8849 15.597 20.9985 15.964 20.9984 16.3399C20.9983 16.4041 20.995 16.4684 20.9885 16.5323C20.9542 16.9112 20.7979 17.2688 20.5431 17.5512C20.2371 17.8801 19.9113 18.1908 19.5937 18.5067C19.3671 18.7306 19.1354 18.9499 18.9084 19.1764C18.6154 19.4669 18.3275 19.7625 18.0345 20.0529C17.9913 20.1013 17.9508 20.1522 17.905 20.1979L17.6172 20.4961C17.4014 20.7119 17.1818 20.9216 16.9699 21.1378C16.758 21.354 16.5146 21.6069 16.288 21.843C16.2677 21.8659 16.2449 21.881 16.2246 21.9012C15.9695 22.1382 15.7352 22.376 15.4931 22.6146C15.3787 22.7268 15.2691 22.8412 15.1569 22.9534C14.9636 23.1497 14.7646 23.3418 14.5786 23.542C14.4643 23.6615 14.4643 23.7353 14.5994 23.8298C14.8211 24.0001 15.0572 24.1508 15.3049 24.2804C15.9212 24.559 16.6042 24.6562 17.2737 24.5605C17.9382 24.4816 18.5617 24.1975 19.0573 23.7479C19.434 23.4169 19.7706 23.0449 20.1219 22.6884C20.3765 22.4333 20.6316 22.161 20.9039 21.8987L21.6401 21.1573C21.8645 20.9307 22.0859 20.7037 22.3129 20.4797C22.5399 20.2557 22.8221 19.9882 23.0767 19.7357C23.3314 19.4833 23.5864 19.2265 23.841 18.9563C24.044 18.7496 24.2316 18.5282 24.402 18.2939C24.7199 17.8137 24.9183 17.2645 24.9807 16.692C25.0153 16.4076 25.0153 16.1202 24.9807 15.8358C24.905 15.3298 24.7216 14.846 24.443 14.4169C24.2427 14.1132 24.0029 13.8375 23.7301 13.5969C23.0245 12.8965 22.3211 12.1909 21.631 11.475C21.4806 11.3075 21.2966 11.1735 21.0911 11.0818C20.8855 10.99 20.6629 10.9426 20.4378 10.9425H20.4283L20.3519 10.9528L20.3511 10.9532Z" fill="white" />
          </g>
          <defs>
              <linearGradient id="paint0_linear_6557_8519" x1="5.54491" y1="8.57067" x2="26.0878" y2="22.6263" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF3B3B" />
                  <stop offset="1" stopColor="#FF9914" />
              </linearGradient>
              <clipPath id="clip0_6557_8519">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.80078 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}