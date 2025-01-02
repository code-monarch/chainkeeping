import React from 'react'

const PricingHeroSection = () => {
    return (
        <div className='bg-secondary-accent min-h-[300px] h-fit w-full flex items-start justify-center pt-[54px]'>
            <div className='min-h-full h-fit md:container flex flex-col items-center justify-start'>
                <h1 className='h-[68px] max-w-[546px] text-foreground text-[2.75rem] font-bold'>Plans & Pricing</h1>
                <p className='max-w-[732px] text-foreground text-base text-center font-dmsans'>We calculate the transactions per tax year. All plans refer to one payment per one tax year and include all your transactions on all added accounts, Exchange, Wallets etc.</p>
            </div>
        </div>
    )
}

export default PricingHeroSection