import React, { useState } from 'react'
import { buttonVariants, cn, Hidden, ToggleGroup, ToggleGroupItem } from '@chainkeeping/ui'
import ComingSoonBadge from '@/pattern/home/atoms/coming-soon-badge'


const Integrations = [
    {
        name: "All integrations",
        value: "all",
    },
    {
        name: "Exchanges",
        value: "exchanges",
    },
    {
        name: "Wallets",
        value: "wallets",
    },
    {
        name: "Blockchain",
        value: "blockchain",
    },
    {
        name: "Accounting",
        value: "accounting",
    },
    {
        name: "Digital platforms",
        value: "digital-platforms",
    },
]

const IntegrationsToggleGroup = () => {
    const [integrations, setIntegrations] = useState<"all" | "exchanges" | "wallets" | "blockchain" | "Accounting" | "digital-plaforms" | "">("all")

    return (
        <>
            <ToggleGroup type="single" orientation='vertical' value={integrations}
                onValueChange={(value: any) => setIntegrations(value)}
                className='w-full max-w-[855px] h-full flex items-center gap-1'>
                {Integrations?.map(({ name, value }, idx) => (
                    <div key={ idx } className='w-fit flex items-center'>
                        <ToggleGroupItem name={name} value={value} aria-label={name} size="custom" variant="outline" className={cn('bg-transparent min-w-fit max-w-[142px] min-h-[38px] flex items-center justify-center text-white text-base whitespace-nowrap gap-3 py-2 px-4 border-0 rounded-[8px] hover:bg-transparent hover:border hover:border-secondary focus-visible:bg-secondary data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground data-[state=on]:border-secondary transition-all duration-200 ease-in-out')}>
                            {name}
                        </ToggleGroupItem>
                        <Hidden isVisible={value === "digital-platforms" } >
                            <ComingSoonBadge status="coming-soon" />
                        </Hidden>
                    </div>
                ))}
            </ToggleGroup>
        </>
    )
}

export default IntegrationsToggleGroup