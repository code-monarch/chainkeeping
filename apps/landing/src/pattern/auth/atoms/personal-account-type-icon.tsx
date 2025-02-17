import { FC } from 'react'
import { cn, IIconProps } from '@chainkeeping/ui'

export const PersonalAccountTypeIcon = ({ className, color }: IIconProps) => {
  return (
    <span className={cn('w-10 h-10 flex items-center justify-center rounded-[8px]', className)}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill={color ?? "#384860"} />
        <path d="M17.08 14.1499C14.29 12.2899 9.74001 12.2899 6.93001 14.1499C5.66001 14.9999 4.96001 16.1499 4.96001 17.3799C4.96001 18.6099 5.66001 19.7499 6.92001 20.5899C8.32001 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill={color ?? "#384860"} />
      </svg>
    </span>
  )
}