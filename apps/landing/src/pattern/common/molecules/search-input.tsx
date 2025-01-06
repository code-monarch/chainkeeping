"use client";
import React, { FC, useState } from "react";
import { cn, Input } from "@chainkeeping/ui";
import SearchInputIcon from "../atoms/search-input-icon";

const SearchInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
    name,
    placeholder,
    onChange,
    value,
    className,
    ...props
}) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    return (
        <div className='relative w-full'>
            <Input
                name={name}
                value={value}
                type='search'
                onChange={onChange}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                variant='default'
                placeholder={placeholder ?? "Search"}
                className={cn('pl-[40px] h-[44px]', className)}
                {...props}
            />
            {/* prefix Icon */}
            <span className='absolute top-1/2 -translate-y-1/2 left-[12px]'>
                <SearchInputIcon focus={isFocus} />
            </span>
        </div>
    );
};

export default SearchInput;
