import React, { FC } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, ScrollBar, ScrollArea } from '@chainkeeping/ui'
import { INavigation } from '@/pattern/common/templates/topbar'
import FAQsCustomNavLink from '../molecules/faqs-nav-link'

const navigation: INavigation[] = [
    {
        title: "Crypto Tax Guide Nigeria",
        href: "#guide"
    },
    {
        title: "Taxation of cryptocurrency as securities in Nigeria",
        href: "#crypto-taxation"
    },
    {
        title: "Applicable taxes to cryptocurrency",
        href: "#applicable-taxes"
    },
    {
        title: "Taxable cryptocurrency income / transaction",
        href: "#taxable-crypto-income",
    },
    {
        title: "Non-taxable cryptocurrency transactions",
        href: "#non-taxable-crypto-transactions",
    },
    {
        title: "Deductible cryptocurrencies for tax purpose",
        href: "#deductible-crypto-for-tax-policies"
    },
    {
        title: "Other deductible expenses",
        href: "#other-deductible-expenses"
    },
    {
        title: "Determination of cryptocurrency gains or loss",
        href: "#determination-of-crypto-gains-or-loss"
    },
    {
        title: "How is cryptocurrency taxed?",
        href: "#how-is-crypto-taxed"
    },
    {
        title: "Tax forms issued by cryptocurrency exchanges",
        href: "#tax-forms-issued-by-crypto-exchanges"
    },
    {
        title: "Tax forms used by tax authority for tax filing",
        href: "#tax-forms-used-by-tax-authority"
    },
    {
        title: "Reports issued by Chainkeeping for tax filing",
        href: "#reports-issued-by-chainkeeping"
    },
    {
        title: "Tax optimization",
        href: "#tax-optimization"
    },
    {
        title: "Tax professionals",
        href: "#tax-professionals"
    },
    {
        title: "How do tax authorities know about your cryptocurrency?",
        href: "#tax-authority-knowledge-about-crypto"
    },
    {
        title: "Penalty for non-payment and non-filing of crypto taxes",
        href: "#penalty-for-non-payment"
    },
]

interface IProps {
    country: "Nigeria" | "Ghana"
}

const TaxGuideNavigation: FC<IProps> = ({ country }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="appearance-none w-full h-fit flex flex-col items-end !gap-y-0 !space-y-0" >
                <ScrollArea className="h-[500px]">
                    {navigation.map(({ title, href }, idx) => (
                        <div key={idx} className="h-full w-full">
                            <NavigationMenuItem className="h-full w-fit">
                                <FAQsCustomNavLink href={href as string} title={title} className='whitespace-pre-wrap' />
                            </NavigationMenuItem>
                        </div>
                    ))}
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default TaxGuideNavigation