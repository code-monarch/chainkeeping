import React from 'react'

const PricingHeroSection = () => {
    return (
        <div className='bg-secondary-accent min-h-[300px] h-fit w-full flex items-start justify-center pt-[54px]'>
            <div className='min-h-full h-fit flex flex-col items-start lg:items-center justify-start px-[18px] lg:container'>
                <h1 className='h-[68px] max-w-[546px] text-foreground text-left lg:text-center text-4xl lg:text-[2.75rem] font-rubik font-bold'>Plans & Pricing</h1>
                <p className='w-full max-w-[339px] lg:max-w-[732px] text-foreground text-base text-left lg:text-center font-dmsans'>We calculate the transactions per tax year. All plans refer to one payment per one tax year and include all your transactions on all added accounts, Exchange, Wallets etc.</p>
            </div>
        </div>
    )
}

export default PricingHeroSection