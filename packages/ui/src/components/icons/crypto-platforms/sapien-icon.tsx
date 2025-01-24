import { FC } from 'react'
import { IIconProps } from '../types'
import { cn } from '@/lib/utils'

export const SapienIcon: FC<IIconProps> = ({ className, width, height }) => {
  return (
      <svg width={width ?? "33"} height={height ?? "32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6557_6592)" className={cn(className)}>
              <path d="M28.9917 11.2702C28.9917 10.9653 28.9782 10.6604 28.9445 10.3621C28.5536 6.59059 25.2845 3.68076 21.429 3.66751C17.9374 3.66087 14.4459 3.66751 10.9612 3.66751C10.3411 3.66751 9.72766 3.74704 9.12103 3.90612C5.72387 4.77443 3.39844 7.73066 3.39844 11.1774C3.39844 14.5379 3.39844 17.8985 3.39844 21.259C3.39844 24.8383 5.86542 27.8476 9.43108 28.6231C9.66024 28.6761 10.3815 28.7954 10.5163 28.7954C14.2842 28.7954 18.0521 28.7954 21.8199 28.7954C21.9278 28.7954 23.2017 28.5966 23.714 28.4375C26.8213 27.4565 28.9917 24.56 28.9984 21.3519C28.9984 17.9913 28.9984 14.6307 28.9917 11.2702ZM20.1011 15.1014C20.4651 15.2803 20.8493 15.4261 21.2066 15.6117C21.9952 16.0094 22.3996 16.6457 22.4131 17.514C22.4198 17.9714 22.4602 18.4354 22.3928 18.8795C22.2581 19.8207 21.6447 20.3907 20.755 20.7023C19.9124 21.1397 19.0429 21.5242 18.1667 21.8821C17.1691 22.3395 16.1782 22.8034 15.1806 23.2608C14.5133 23.5657 13.8326 23.864 13.1653 24.1755C11.6554 24.8781 10.0512 23.8905 10.0445 22.2533C10.0445 21.9152 10.0377 21.5772 10.0445 21.2458C10.0647 20.4305 10.4489 19.8141 11.1701 19.4164C11.4667 19.2507 11.7902 19.138 12.107 19.0054C12.7204 18.6939 13.3473 18.4089 13.9876 18.157C13.9876 18.0045 13.8528 18.0045 13.7652 17.9581C12.9563 17.5869 12.1475 17.2224 11.3386 16.8512C10.4826 16.4602 10.0647 15.7907 10.0445 14.8693C10.0377 14.5645 10.0445 14.2595 10.0445 13.9613C10.0445 12.9007 10.5635 12.1517 11.5745 11.7607C12.5182 11.3166 13.4618 10.8725 14.4122 10.435C15.9895 9.7059 17.5735 8.99003 19.144 8.24768C19.9394 7.86987 20.7078 7.79694 21.4762 8.28082C22.0289 8.6321 22.3592 9.13586 22.4198 9.77879C22.4738 10.329 22.5007 10.8857 22.4198 11.4359C22.3187 12.1451 21.9278 12.6688 21.2874 12.9869C20.3371 13.4509 19.3664 13.8685 18.4093 14.3059C18.9418 14.644 19.5349 14.8362 20.1011 15.1014Z" fill="#101D6F" />
              <path d="M13.993 18.157C13.993 18.0045 13.8582 18.0045 13.7705 17.9581C12.9617 17.5869 12.1529 17.2224 11.344 16.8512C10.488 16.4601 10.0701 15.7907 10.0499 14.8693C10.0431 14.5644 10.0499 14.2595 10.0499 13.9613C10.0499 12.9007 10.5689 12.1517 11.5799 11.7607C11.6204 11.8071 11.6743 11.7938 11.7282 11.7872C12.1596 11.7341 12.591 11.7142 12.9954 11.8999C14.4716 12.5627 15.9342 13.2454 17.4171 13.895C17.7474 14.0408 18.0507 14.2529 18.4214 14.2993C18.9472 14.644 19.5403 14.8362 20.0998 15.1013C20.4638 15.2803 20.8479 15.4261 21.2052 15.6117C21.9938 16.0094 22.3983 16.6457 22.4117 17.514C22.4185 17.9714 22.4589 18.4354 22.3915 18.8795C22.2567 19.8207 21.6433 20.3907 20.7536 20.7023C20.7401 20.689 20.7199 20.6625 20.7064 20.6625C20.0593 20.8017 19.4999 20.5498 18.9337 20.2979C17.5721 19.6815 16.2173 19.0584 14.8423 18.4619C14.5727 18.3426 14.3233 18.1304 13.993 18.157Z" fill="#FDFDFE" />
              <path d="M18.4157 14.2993C18.045 14.2529 17.7417 14.0408 17.4114 13.895C15.9285 13.2454 14.4658 12.5627 12.9897 11.8999C12.5853 11.7142 12.1539 11.7341 11.7225 11.7872C11.6686 11.7938 11.6147 11.8137 11.5742 11.7607C12.5179 11.3166 13.4615 10.8725 14.4119 10.435C15.9892 9.7059 17.5732 8.99003 19.1437 8.24763C19.939 7.86982 20.7074 7.79692 21.4758 8.28077C22.0285 8.6321 22.3588 9.13586 22.4195 9.77879C22.4734 10.329 22.5004 10.8857 22.4195 11.4359C22.3184 12.1451 21.9274 12.6688 21.2871 12.9869C20.3435 13.4376 19.3796 13.8618 18.4157 14.2993Z" fill="#E3E9F6" />
              <path d="M20.7093 20.6623C20.0622 20.8015 19.5027 20.5496 18.9366 20.2978C17.575 19.6813 16.2202 19.0583 14.8451 18.4617C14.5688 18.3424 14.3194 18.1303 13.9891 18.1568C13.3487 18.4087 12.7219 18.6937 12.1085 19.0053C11.7985 19.1378 11.4682 19.2505 11.1716 19.4162C10.4504 19.8139 10.0662 20.4303 10.046 21.2456C10.0392 21.5836 10.046 21.9217 10.046 22.2531C10.0527 23.8903 11.6502 24.8779 13.1668 24.1753C13.834 23.8638 14.5081 23.5655 15.1821 23.2606C16.1797 22.8033 17.1706 22.3393 18.1681 21.882C19.0511 21.524 19.9139 21.1396 20.7564 20.7021C20.743 20.6889 20.7227 20.6623 20.7093 20.6623Z" fill="#DFE5F3" />
          </g>
          <defs>
              <clipPath id="clip0_6557_6592">
                  <rect width="25.6" height="25.6" fill="white" transform="translate(3.39844 3.20001)" />
              </clipPath>
          </defs>
      </svg>

  )
}