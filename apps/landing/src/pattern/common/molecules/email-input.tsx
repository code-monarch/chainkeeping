import React, { FC, useRef, useState } from "react";
import { ICustomInputProps } from "@/pattern/types";
import { Input } from "@chainkeeping/ui";
import EmailInputIcon from "../atoms/email-input-icon";
import { Controller, useFormContext } from "react-hook-form";

const EmailInput: FC<ICustomInputProps> = ({
    name,
    error,
    value,
    onChange,
    placeholder,
    ...props
}) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const { control } = useFormContext();
    return (
        <Controller
            name={name!}
            control={control}
            render={({ field: { value, name, onChange, disabled } }) => (
                <div className='relative w-full'>
                    <Input
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        disabled={disabled}
                        variant={error ? "error" : "default"}
                        placeholder={placeholder ?? "example@gmail.com"}
                        {...props}
                    />
                    {/* Prefix */}
                    <span className='absolute top-1/2 -translate-y-1/2 left-[12px]'>
                        <EmailInputIcon focus={error ? false : isFocus} />
                    </span>
                </div>
            )}
        />
    );
};

export default EmailInput;
