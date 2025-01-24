import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const LitecoinIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_1706)">
              <mask id="mask0_6557_1706" maskUnits="userSpaceOnUse" x="3" y="3" width="26" height="26">
                  <path d="M28.9984 3.20001H3.39844V28.7498H28.9984V3.20001Z" fill="white" />
              </mask>
              <g mask="url(#mask0_6557_1706)">
                  <path d="M17.7043 3.20001C18.0557 3.50119 18.4573 3.45099 18.8588 3.50119C24.9326 4.75609 29.0486 10.0769 28.9482 16.3514C28.8479 22.3247 24.3804 27.4949 18.4071 28.549C18.1561 28.5992 17.8549 28.549 17.6541 28.7498C17.5035 28.7498 17.3529 28.7498 17.2024 28.7498C16.4996 28.549 15.8471 28.549 15.1443 28.7498C14.7929 28.7498 14.4416 28.7498 14.1404 28.7498C13.7388 28.549 13.2871 28.4486 12.8353 28.2981C7.86589 26.7922 4.75373 23.4792 3.59922 18.309C3.54903 18.1584 3.64942 17.9075 3.39844 17.8573C3.39844 16.6526 3.39844 15.4479 3.39844 14.2431C3.59922 14.193 3.54903 13.942 3.59922 13.7914C4.65334 8.26982 8.66903 4.35452 14.1906 3.4008C14.3412 3.3506 14.542 3.45099 14.6424 3.20001C15.0439 3.20001 15.3953 3.20001 15.7969 3.20001C16.1984 3.4008 16.6502 3.4008 17.0518 3.20001C17.2526 3.20001 17.5035 3.20001 17.7043 3.20001ZM22.3726 20.9192C20.0133 20.9192 17.6039 20.9192 15.0941 20.9192C15.5459 19.3631 15.9977 17.8573 16.4494 16.4016C17.1522 16.2008 17.8549 16 18.5075 15.7992C18.6079 15.3475 18.8588 14.8957 18.8086 14.3937C18.1561 14.5945 17.6039 14.7451 16.9012 14.9459C16.9514 14.6447 17.0016 14.4941 17.0518 14.2933C17.6541 12.1851 18.3067 10.0769 18.909 7.96864C19.0094 7.71766 19.16 7.41648 18.7584 7.11531C17.9553 7.11531 17.0518 7.11531 16.1984 7.11531C15.7467 7.11531 15.4957 7.26589 15.3953 7.71766C15.0439 8.92237 14.6926 10.1271 14.3412 11.382C13.8894 12.9882 13.3875 14.5945 12.9357 16.1506C12.2329 16.3514 11.5804 16.5522 10.9278 16.753C10.7773 17.2047 10.5765 17.6063 10.5263 18.1082C11.1788 17.9075 11.7812 17.7569 12.4839 17.5561C11.8314 19.7647 11.229 21.7726 10.6267 23.7804C10.7773 23.8306 10.8275 23.8306 10.9278 23.8306C14.3914 23.8306 17.8549 23.8306 21.3184 23.8306C21.469 23.8306 21.5694 23.8306 21.72 23.7804C22.0714 23.5796 22.6235 21.371 22.3726 20.9192Z" fill="#355D9C" />
              </g>
          </g>
          <defs>
              <clipPath id="clip0_6557_1706">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.39844 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}