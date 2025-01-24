import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const TronIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_8716)">
              <path d="M14.1098 28.7855C13.9762 28.7375 13.8871 28.6415 13.8148 28.5295C13.7091 28.3535 13.6534 28.1615 13.5811 27.9748C13.0412 26.5828 12.4458 25.2121 11.8558 23.8415C10.2642 20.1401 8.63914 16.4495 7.03635 12.7481C6.01792 10.3908 4.99948 8.03878 4.03114 5.66545C3.83079 5.16411 3.63044 4.66278 3.44679 4.15611C3.37444 3.95878 3.38001 3.75611 3.48575 3.56411C3.58592 3.38811 3.71949 3.25478 3.93096 3.20678C4.00331 3.19078 4.07009 3.20678 4.13688 3.21745C4.65444 3.29211 5.16644 3.37745 5.68401 3.46278C6.36853 3.58011 7.05861 3.69745 7.74314 3.81478C8.48888 3.94278 9.24019 4.07611 9.98593 4.20411C10.7205 4.33211 11.4607 4.46011 12.1953 4.59345C12.8854 4.71611 13.5699 4.83878 14.26 4.95611C14.9946 5.08411 15.7292 5.21745 16.4694 5.34545C17.0538 5.44678 17.6381 5.55345 18.2225 5.66011C18.907 5.78278 19.5915 5.90545 20.2705 6.02278C20.9995 6.15078 21.7285 6.28411 22.4576 6.41211C22.7748 6.47078 23.092 6.52945 23.4092 6.58278C23.5651 6.60945 23.7042 6.67878 23.8322 6.75878C24.0158 6.87078 24.1717 7.00945 24.3331 7.14811C25.3849 8.06545 26.3922 9.02545 27.4162 9.96945C27.7612 10.2895 28.1174 10.6041 28.468 10.9241C28.7073 11.1428 28.8075 11.4148 28.7797 11.7348C28.7741 11.7721 28.763 11.8095 28.7463 11.8415C28.5682 12.1561 28.3289 12.4228 28.0951 12.7001C26.8151 14.2201 25.5185 15.7295 24.2273 17.2388C22.6913 19.0308 21.1553 20.8175 19.6193 22.6095C18.4506 23.9748 17.2764 25.3348 16.1021 26.7001C15.6346 27.2441 15.1671 27.7828 14.7052 28.3321C14.5995 28.4548 14.4938 28.5721 14.3713 28.6788C14.3324 28.7161 14.2878 28.7428 14.2433 28.7801C14.1988 28.7855 14.1543 28.7855 14.1098 28.7855ZM6.0847 6.02811C6.0847 6.02278 6.07914 6.01745 6.07357 6.02278C6.07357 6.02278 6.07357 6.03345 6.07357 6.03878C6.09027 6.06011 6.09583 6.08145 6.10696 6.10811C7.43148 9.20679 8.75601 12.3055 10.075 15.4041C11.3884 18.4761 12.7018 21.5535 14.0151 24.6255C14.0207 24.6468 14.0263 24.6681 14.0485 24.6841C14.0764 24.4441 14.1042 24.2041 14.132 23.9695C14.2044 23.3668 14.2823 22.7641 14.3546 22.1615C14.4214 21.5961 14.4882 21.0255 14.5605 20.4601C14.6329 19.8575 14.7108 19.2548 14.7831 18.6521C14.8499 18.0868 14.9223 17.5161 14.9891 16.9508C15.0558 16.3855 15.1282 15.8148 15.195 15.2495C15.2618 14.7161 15.323 14.1881 15.3898 13.6548C15.3953 13.6121 15.3898 13.5908 15.3564 13.5641C14.3212 12.7215 13.2861 11.8841 12.251 11.0415C10.3588 9.48945 8.45548 7.94811 6.55774 6.40145C6.40192 6.27878 6.25166 6.14545 6.0847 6.02811ZM26.0193 12.7108C25.9915 12.7001 25.9748 12.7055 25.9525 12.7108C25.5518 12.7748 25.1567 12.8335 24.756 12.8975C24.2162 12.9828 23.6764 13.0628 23.1365 13.1481C22.5411 13.2388 21.9456 13.3348 21.3501 13.4255C20.7546 13.5161 20.1591 13.6121 19.5692 13.7028C19.0294 13.7881 18.4951 13.8681 17.9553 13.9535C17.6325 14.0015 17.3153 14.0548 16.9925 14.1028C16.9647 14.1081 16.9425 14.1081 16.9369 14.1508C16.8924 14.5188 16.8478 14.8921 16.8033 15.2601C16.7532 15.6761 16.6976 16.0921 16.6475 16.5081C16.5974 16.9188 16.5473 17.3348 16.4972 17.7455C16.4471 18.1615 16.3971 18.5721 16.347 18.9881C16.2969 19.4095 16.2412 19.8255 16.1911 20.2468C16.1411 20.6628 16.091 21.0735 16.0409 21.4895C15.9908 21.9055 15.9407 22.3215 15.8851 22.7375C15.835 23.1588 15.7793 23.5748 15.7292 23.9961C15.7014 24.2255 15.6736 24.4495 15.6458 24.7001C19.1073 20.6895 22.5633 16.7001 26.0193 12.7108ZM7.29792 5.30811C7.29235 5.31345 7.29235 5.31878 7.28679 5.31878C7.29792 5.32945 7.30905 5.33478 7.32019 5.34545C7.51496 5.50011 7.70975 5.65478 7.90453 5.80411C10.6371 7.94811 13.3696 10.0921 16.0965 12.2415C16.1299 12.2681 16.1522 12.2681 16.1856 12.2415C17.9164 10.8441 19.6416 9.44679 21.3724 8.04945C21.4558 7.98545 21.5338 7.91611 21.6284 7.84145C16.8423 6.99345 12.0673 6.15078 7.29792 5.30811ZM26.3198 11.1161C26.2976 11.0948 26.2809 11.0735 26.2586 11.0575C25.8913 10.7321 25.5185 10.4068 25.1511 10.0761C24.5501 9.54812 23.9546 9.02012 23.3591 8.48678C23.3146 8.44945 23.2924 8.44945 23.2478 8.48678C22.9863 8.70012 22.7191 8.90812 22.4576 9.11612C21.044 10.2415 19.6249 11.3668 18.2113 12.4921C18.1946 12.5028 18.1779 12.5135 18.1668 12.5401C20.8826 12.0655 23.5985 11.5908 26.3198 11.1161Z" fill="#FE060A" />
          </g>
          <defs>
              <clipPath id="clip0_6557_8716">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.39844 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}