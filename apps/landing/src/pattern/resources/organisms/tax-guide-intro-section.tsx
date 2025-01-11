import React from 'react'
import InfoWidget from '../molecules/info-widget'

const TaxGuideIntroSection = () => {
  return (
    <div className="w-full space-y-[16px]">
      <h3 className='text-3xl font-dmsans font-semibold'>Introduction</h3>
      <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>According to UN Newspaper, “Financial institutions in Nigeria are currently banned from facilitating crypto transactions by the Central Bank of Nigeria. Despite this ban, Nigerians traded at least N497.35bn ($1.16bn) worth of Bitcoin between January 2021 to June 2022 and the percentage of Nigerians who owned crypto in 2021 was 6.3%.” According to the Nigerian crypto report released by KuCoin in April 2022, Crypto investors account for 35% of the Nigerian population. <br /><br />
        With the above, Nigeria needed to redesign its capital controls to include flows channelled through cryptocurrencies and impose a financial tax on cryptocurrency trading and limiting the amount of individual transactions on crypto exchanges. For this reason, the SEC released recently, new regulations on the issuance, custody, and exchange of digital assets, as well as classify them as securities. <br /><br />
        Cryptocurrency is generally classified as Property, but with the SEC's Regulation, Nigeria classifies Cryptocurrency as Securities. <br /><br />
        Given the fast-evolving nature of cryptocurrencies and their ecosystem, countries urgently need to agree and implement a global tax cryptocurrency regulation that considers the needs and challenges of developing countries and gives them adequate representation. <br /><br />
        Though the tax regulation is yet to be released in Nigeria, it can be believed that Cryptocurrencies are seen as securities according to SEC. <br /><br />
        Our platform Chainkeeping is built to ease the Cryptocurrency taxation process and calculation. It helps to compute the total gross inflows and outflows of an Individual or business' crypto-transactions and compute tax liability while considering the applicable tax regulation.</p>
      <InfoWidget info="Our platform Chainkeeping is built to ease the Cryptocurrency taxation process and calculation. It helps to compute the total gross inflows and outflows of an Individual or business' crypto-transactions and compute tax liability while considering the applicable tax regulation." />
    </div>
  )
}

export default TaxGuideIntroSection