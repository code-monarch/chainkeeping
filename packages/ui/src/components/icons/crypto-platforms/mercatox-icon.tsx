import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const MercatoxIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
          <g clipPath="url(#clip0_6557_8241)">
              <path d="M4 3.31704C4 3.28432 4 3.25062 4 3.2179C5.7472 3.21294 7.4944 3.207 9.2416 3.20105C9.38762 3.20006 9.50293 3.23376 9.61562 3.37453C11.5849 5.82513 13.5558 8.27375 15.5379 10.7105C15.9495 11.217 16.3141 11.7811 16.806 12.1955C16.9025 12.3551 16.9836 12.5306 17.098 12.6714C17.8299 13.5774 18.5651 14.4806 19.3098 15.3728C19.5011 15.6018 19.5378 15.7663 19.3218 16.0122C18.9178 16.4702 18.5378 16.9579 18.1535 17.4387C17.7052 17.9988 17.262 18.5639 16.8171 19.126C15.876 20.2571 14.9298 21.3843 13.9948 22.5213C12.4969 24.3425 11.0059 26.1715 9.51572 28.0005C9.3996 28.1432 9.28005 28.2047 9.10924 28.2037C7.4073 28.1918 5.70536 28.1888 4.00342 28.1839C4.00342 28.1512 4.00342 28.1174 4.00342 28.0848C4.08283 28.0193 4.17421 27.9658 4.23911 27.8855C5.97521 25.7174 7.70362 23.5394 9.44399 21.3764C10.8983 19.5691 12.3637 17.7748 13.8325 15.9834C13.9896 15.7921 14.0366 15.6613 13.865 15.4501C12.2936 13.5249 10.7292 11.5977 9.16987 9.66461C8.00848 8.22418 6.86674 6.76295 5.69596 5.33343C5.13918 4.65237 4.63193 3.91283 4 3.31704Z" fill="#2FB902" />
              <path d="M29.6002 3.31701C28.9597 3.92273 28.4448 4.67119 27.8786 5.36017C26.7087 6.78473 25.5721 8.24597 24.4149 9.68538C23.081 11.3449 21.7403 12.9965 20.4013 14.6511C20.1827 14.9217 19.9649 15.1943 19.7361 15.4531C19.5781 15.6315 19.5884 15.7693 19.7378 15.9517C21.21 17.7519 22.6831 19.5522 24.1434 21.3654C25.8803 23.5206 27.6045 25.6897 29.3372 27.8498C29.4115 27.9429 29.4764 28.062 29.5993 28.0857C29.5993 28.1185 29.5993 28.1522 29.5993 28.1848C27.8957 28.1908 26.192 28.1938 24.4884 28.2057C24.3176 28.2067 24.1989 28.1432 24.0836 28.0005C22.5883 26.1615 21.0913 24.3255 19.5901 22.4926C18.6678 21.3664 17.7395 20.2491 16.8138 19.127C17.2596 18.5639 17.702 17.9988 18.1503 17.4397C18.5354 16.9589 18.9146 16.4712 19.3185 16.0132C19.5354 15.7673 19.4979 15.6027 19.3066 15.3737C18.5619 14.4815 17.8275 13.5784 17.0948 12.6723C16.9812 12.5316 16.8992 12.3561 16.8027 12.1965C17.4441 11.564 17.9786 10.8086 18.5568 10.1047C19.8053 8.58303 21.035 7.0405 22.2741 5.50789C22.8385 4.80899 23.415 4.121 23.9649 3.40723C24.087 3.24762 24.2014 3.20103 24.3637 3.20103C26.1083 3.20797 27.853 3.21292 29.5985 3.21887C29.6002 3.25059 29.6002 3.28331 29.6002 3.31701Z" fill="#030303" />
          </g>
          <defs>
              <clipPath id="clip0_6557_8241">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(4 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}