import React from 'react'
import { BrandLogoWhite, cn } from '@chainkeeping/ui'
import Link from 'next/link';
import CopyrightText from '../atoms/copyright-text';
import FacebookIcon from '../atoms/social-icons.tsx/facebook-icon';
import LinkedInIcon from '../atoms/social-icons.tsx/linkedIn-icon';
import TwitterIcon from '../atoms/social-icons.tsx/twitter-icon';
import YoutubeIcon from '../atoms/social-icons.tsx/youtube-icon';

const navlinks = [
    // Solutions
    {
        header: "Solutions",
        links: [
            {
                title: "Crypto Taxes",
                href: "",
            },
            {
                title: "Crypto Invoicing",
                href: "",
            },
            {
                title: "Crypto Payments",
                href: "",
            },
            {
                title: "Crypto Payroll",
                href: "",
            },
            {
                title: "Crypto Financial Reporting",
                href: "",
            },
        ]
    },
    // Who we Serve
    {
        header: "Who we serve",
        links: [
            {
                title: "Individuals",
                href: "",
            },
            {
                title: "Corporate Entities",
                href: "",
            },
            {
                title: "Accounting Practitioners",
                href: "",
            },
            {
                title: "Tax Authorities",
                href: "",
            }
        ]
    },
    // Resources
    {
        header: "Resources",
        links: [
            {
                title: "Blog",
                href: "",
            },
            {
                title: "Crypto Tax guide",
                href: "",
            },
            {
                title: "Financial Reporting guide",
                href: "",
            },
            {
                title: "Glossary",
                href: "",
            },
            {
                title: "Help Center",
                href: "",
            },
            {
                title: "FAQs",
                href: "",
            },
        ]
    },
    // Company
    {
        header: "Company",
        links: [
            {
                title: "About",
                href: "",
            },
            {
                title: "Contact us",
                href: "",
            },
            {
                title: "Careers",
                href: "",
            },
            {
                title: "Partnership",
                href: "",
            },
            {
                title: "Pricing",
                href: "",
            }
        ]
    },
    // Legal
    {
        header: "Legal",
        links: [
            {
                title: "Privacy Policy",
                href: "",
            },
            {
                title: "Terms of use",
                href: "",
            },
            {
                title: "Security",
                href: "",
            }
        ]
    },
]

const style = {
    header: "text-base text-primary-foreground font-[700]",
    ul: "flex flex-col items-start justify-start gap-[8px]",
    li: "cursor-pointer hover:underline text-sm text-[hsla(215,20%,65%,1)] font-normal",
    bottomLink:
        "cursor-pointer hover:underline text-[0.8125rem] text-center text-white font-normal font-manrope !whitespace-pre",
};

const Footer = () => {


    return (
        <div className='bg-primary w-full h-[420px]'>
            <div className='w-full h-full md:container flex flex-col justify-between pt-[56px]'>
                <div className='w-full h-[180px] flex items-start gap-x-[50px]'>
                    <Link href="/" legacyBehavior>
                        <BrandLogoWhite />
                    </Link>
                    {/* Solutions */}
                    <div className='xl:min-w-[972px] 2xl:w-full flex items-start gap-6 justify-between'>
                        {/* Solutions */}
                        {navlinks?.map(({ header, links }, idx) => (
                            <ul className={cn(style.ul)} key={idx}>
                                <h5 className={cn(style.header)}>
                                    {header}
                                </h5>
                                {links.map(({ href, title }, idx) => (
                                    <li
                                        key={idx}
                                        className={cn(style.li)}
                                    //   onClick={}
                                    >
                                        <Link href={href} legacyBehavior passHref>
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className='h-[72px] w-full flex items-center justify-between py-6 border-t'>
                    <CopyrightText />
                    <div className='flex items-center gap-6'>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer