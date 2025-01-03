import { Tabs, TabsContent, TabsList, TabsTrigger } from '@chainkeeping/ui'
import React from 'react'
import IndividualPricingTab from '../organisms/individual-pricing-tab'
import PractitionerPricingTab from '../organisms/practitioner-pricing-tab'
import CompanyPricingTab from '../organisms/company-pricing-tab'
import CostCurrencyWidget from '../molecules/cost-currency-widget'

const styles = {
    tabs: `w-full flex flex-col items-start justify-start space-y-[64px]`,
    tablist: `bg-accent w-full max-w-[452px] h-[44px] flex items-center justify-between p-[4px]`,
    tabTrigger: `w-[148px] h-[36px] flex xitems-center justify-center font-dmsans font-medium text-base text-gray-600 font-[500] data-[state=active]:bg-white data-[state=active]:font-[500] data-[state=active]:rounded-[7px] data-[state=active]:shadow`,
    tabContent: `w-full flex items-center justify-center`
}

const PricingTabs = () => {
    return (
        <div className='relative w-full md:container min-h-[350px] pt-[88px]'>
            <Tabs defaultValue="individual" className={styles.tabs}>
                <TabsList className={styles.tablist}>
                    {/* Individual */}
                    <TabsTrigger value="individual" className={styles.tabTrigger}>
                        Individual
                    </TabsTrigger>

                    {/* Company */}
                    <TabsTrigger value="company" className={styles.tabTrigger}>
                        Company
                    </TabsTrigger>

                    {/* Practitioner */}
                    <TabsTrigger value="practitioner" className={styles.tabTrigger}>
                        Practitioner
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="individual" className={styles.tabContent}>
                    <IndividualPricingTab />
                </TabsContent>

                <TabsContent value="company" className={styles.tabContent}>
                    <CompanyPricingTab />
                </TabsContent>

                <TabsContent value="practitioner" className={styles.tabContent}>
                    <PractitionerPricingTab />
                </TabsContent>
            </Tabs>

            {/* Absolute currency selector */}
            <div className='absolute top-[88px] right-[32px]'>
                <CostCurrencyWidget />
            </div>
        </div>
    )
}

export default PricingTabs