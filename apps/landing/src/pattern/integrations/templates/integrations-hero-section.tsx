import React from 'react'
import { useRouter } from 'next/navigation'
import SearchInput from '@/pattern/common/molecules/search-input'
import IntegrationsToggleGroup from '../organisms/integrations-toggle-group'
import { Button, Checkbox } from '@chainkeeping/ui'
import { APP_ROUTES } from '@/lib/routes'

const IntegrationsHeroSection = () => {
    const { push } = useRouter()
    return (
        <section className="bg-primary bg-pattern-bg-img bg-cover bg-center w-full h-[484px]">
            <div className='w-full h-full md:container flex flex-col items-center justify-start gap-y-8 pt-[69px] pb-[47px]'>
                <div className='w-full max-w-[760px] flex flex-col gap-y-8'>
                    <div className='w-full flex flex-col gap-y-1'>
                        <h3 className="font-rubik font-bold text-[2.75rem] text-white">Seamlessly import from anywhere</h3>
                        <p className='text-white text-base text-center font-dmsans leading-[22px]'>Direct integration with 500+ exchanges, wallets, blockchains and accounting softwares. Integrate via read-only access for trade tracking, calculating crypto taxes and syncing your accounting data. Import your transactions using API connections or CSV files or manual entry.</p>
                    </div>
                    <SearchInput className="h-14" placeholder='Search exchange, wallet etc...' />
                </div>
                <div className='w-full max-w-[855px] flex flex-col gap-y-8'>
                    <IntegrationsToggleGroup />
                    <div className='w-full flex items-center justify-center gap-8'>
                        <div className='w-fit flex items-center justify-center gap-4 pr-8 border-r border-white'>
                            {/*  API auto sync  */}
                            <div className="w-fit flex items-start space-x-2">
                                <Checkbox id="api-auto-sync" className='mt-[2px]' />
                                <label
                                    htmlFor="api-auto-sync"
                                    className="text-sm text-white font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    API auto sync
                                </label>
                            </div>

                            {/* CSV File */}
                            <div className="w-fit flex items-start space-x-2">
                                <Checkbox id="api-auto-sync" className='mt-[2px]' />
                                <label
                                    htmlFor="api-auto-sync"
                                    className="text-sm text-white font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    CSV file
                                </label>
                            </div>
                        </div>
                        <div className='w-fit flex items-center justify-start gap-1 pl-8'>
                            <p className='text-white text-base font-dmsans'>Can't find your platform?</p>
                            <Button variant="link" onClick={() => push(APP_ROUTES.contact)} className='text-base'>Send a Request</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntegrationsHeroSection