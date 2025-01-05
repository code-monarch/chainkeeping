import React from "react";
import { IInputIconProps } from "@/pattern/types";
import { SECONDARY_HEX_COLOUR } from "@/lib/constants";

const PasswordInputLockIcon = ({ focus }: IInputIconProps) => {
    return (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.98857 0.5C9.29012 0.5 11.142 2.31109 11.142 4.547V5.69701C12.4338 6.10022 13.375 7.2696 13.375 8.6663V12.369C13.375 14.0981 11.9415 15.5 10.1742 15.5H3.8266C2.05852 15.5 0.625 14.0981 0.625 12.369V8.6663C0.625 7.2696 1.56696 6.10022 2.85796 5.69701V4.547C2.86559 2.31109 4.7175 0.5 6.98857 0.5ZM6.99619 9.03821C6.63038 9.03821 6.33316 9.32888 6.33316 9.68662V11.3412C6.33316 11.7064 6.63038 11.9971 6.99619 11.9971C7.36962 11.9971 7.66684 11.7064 7.66684 11.3412V9.68662C7.66684 9.32888 7.36962 9.03821 6.99619 9.03821ZM7.00381 1.80428C5.45674 1.80428 4.19927 3.02658 4.19165 4.5321V5.53528H9.80835V4.547C9.80835 3.03404 8.55088 1.80428 7.00381 1.80428Z" fill={focus ? SECONDARY_HEX_COLOUR : "#94A3B8"} />
        </svg>
    );
};

export default PasswordInputLockIcon;
