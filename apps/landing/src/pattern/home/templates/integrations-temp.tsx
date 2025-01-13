import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Button, ScrollArea, ScrollBar, Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@chainkeeping/ui'
import LearnMoreIcon from '../atoms/learn-more-icon'
import CryptoPlatformsTab from '../organisms/crypto-platforms-tab'
import ComingSoonBadge from '@/pattern/home/atoms/coming-soon-badge'
import AccountingSoftwaresTab from '../organisms/accounting-softwares-tab'
import EcommerceTab from '../organisms/e-commerce-tab'
import { useRouter } from 'next/navigation'
import { APP_ROUTES } from '@/lib/routes'

const styles = {
  tabs: `w-full flex flex-col items-start lg:items-center justify-start space-y-[32px] overflow-x-hidden`,
  tablist: `bg-transparent w-full w-fit lg:max-w-[668px] flex items-center justify-between gap-8 overflow-x-auto lg:overflow-x-hidden`,
  tabTrigger: `w-fit font-rubik font-medium text-xl p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none`,
  tabContent: `w-full flex items-center justify-center`
}

const IntegrationsTemp = () => {
  const { push } = useRouter()

  return (
    <div className='w-full h-fit lg:h-[647px] flex flex-col items-center gap-y-[46px] px-[18px] lg:container'>
      <div className='w-full lg:max-w-[935px] flex flex-col items-start lg:items-center gap-y-4 lg:gap-y-6'>
        <div className='w-full text-center space-y-[4px]'>
          <HeaderLabel className='text-left lg:text-center'>Integrations</HeaderLabel>
          <Typography className='text-left lg:text-center text-2xl lg:text-[2.25rem] leading-[28.44px] lg:leading-[42.66px] after:w-[274px] after:left-0 lg:after:w-[725px]'>Support for 500+ Exchanges and Wallets </Typography>
        </div>
        <p className='text-foreground text-base text-left lg:text-center leading-[22.4px] font-dmsans'>Your transactions can be imported from all crypto platforms - Wallets, Exchanges, DeFi Platforms, NFT Marketplaces, etc. via APIs, wallet addresses, CSV Uploads and/or manual transaction entries. Real-time sync to accounts on major exchanges like Coinbase, Binance. Integrate your favorite accounting softwares as well.</p>

        <Button variant="link" onClick={() => push(APP_ROUTES.integrations)} className='font-dmsans p-0'>
          See all integrations <span className='inline-flex ml-3'><LearnMoreIcon /></span>
        </Button>
      </div>

      {/* Integration tabs */}
      <Tabs defaultValue="crypto-platforms" className={styles.tabs}>
        <ScrollArea className="w-[350px] sm:w-[500px] lg:w-[668px] h-fit">
          <TabsList className={styles.tablist}>
            {/* Crypto Platforms */}
            <TabsTrigger value="crypto-platforms" className={styles.tabTrigger}>
              Crypto Platforms
            </TabsTrigger>

            {/* Accounting Softwares */}
            <TabsTrigger value="accounting-softwares" className={styles.tabTrigger}>
              Accounting Softwares
            </TabsTrigger>

            {/* e-Commerce */}
            <TabsTrigger value="e-commerce" className={styles.tabTrigger}>
              e-Commerce
              <ComingSoonBadge status="coming-soon" />
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" className='lg:!hidden' />
        </ScrollArea>

        {/* Crypto Platforms */}
        <TabsContent value="crypto-platforms" className={styles.tabContent}>
          <CryptoPlatformsTab />
        </TabsContent>

        {/* Accounting Softwares */}
        <TabsContent value="accounting-softwares" className={styles.tabContent}>
          <AccountingSoftwaresTab />
        </TabsContent>

        {/* e-Commerce */}
        <TabsContent value="e-commerce" className={styles.tabContent}>
          <EcommerceTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default IntegrationsTemp