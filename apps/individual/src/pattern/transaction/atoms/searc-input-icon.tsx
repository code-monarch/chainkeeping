import React from "react";
import { IInputIconProps } from "@/pattern/types";
import { SECONDARY_HEX_COLOUR } from "../../../../../landing/src/lib/constants/index";

export const SearchInputIcon = ({ focus }: IInputIconProps) => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M19.25 19.25L15.5 15.5L19.25 19.25ZM4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z'
				stroke={focus ? SECONDARY_HEX_COLOUR : "#94A3B8"}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default SearchInputIcon;
