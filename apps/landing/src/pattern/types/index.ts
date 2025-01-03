import { ReactNode } from "react";
export interface INavListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    icon: React.ReactElement
    title: string
    description: string
    exact?: boolean // Determines whether the link is exactly on the same app route e.g: "buyer" and not "buyer/checkout"
    className?: string
}


export interface IIconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    height?: string;
    width?: string;
    className?: string;
}