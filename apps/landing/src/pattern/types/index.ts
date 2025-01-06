import { IIconProps } from "@chainkeeping/ui";
import { ReactElement, ReactNode } from "react";
import { FieldError } from "react-hook-form";
export interface INavListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    icon: React.ReactElement
    title: string
    description: string
    exact?: boolean // Determines whether the link is exactly on the same app route e.g: "buyer" and not "buyer/checkout"
    className?: string
}
export interface ICustomInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: FieldError;
    prefixIcon?: ReactElement;
    suffixIcon?: ReactElement;
}
export interface IInputIconProps extends IIconProps {
    focus?: boolean; // input focus state
    toggle?: boolean; // toggle password input visible state
}