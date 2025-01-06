import React, { ReactElement, useEffect, useState } from 'react'
import { Exchanges, AccountingApps, Blockchains, Wallets } from '@/lib/data/platforms'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const CryptoPlatformsTemp = () => {
    const [integrations, setIntegrations] = useState<{ name: string, Icon: ReactElement }[]>([])
    const currentIntegration = useSelector((state: RootState) => state.integrations.integration);

    useEffect(() => {
        if (currentIntegration) {
            switch (currentIntegration) {
                case 'all':
                    setIntegrations([
                        ...Exchanges,
                        ...Wallets,
                        ...Blockchains,
                        ...AccountingApps,
                    ]);
                    break;
                case 'exchanges':
                    setIntegrations(Exchanges);
                    break;
                case 'wallets':
                    setIntegrations(Wallets);
                    break;
                case 'blockchain':
                    setIntegrations(Blockchains);
                    break;
                case 'accounting':
                    setIntegrations(AccountingApps);
                    break;
                case 'digital-platforms':
                    setIntegrations([]);
                    break;
                default:
                    setIntegrations(Exchanges);
            }
        }
    }, [currentIntegration]);

    return (
        <div className='w-full min-h-[920px] h-full md:container flex items-start justify-center'>
            <div className='w-fit h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 '>
                {integrations.length > 0 ? integrations.map(({ Icon, name }, idx) => (
                    <div key={idx} className='w-[227px] h-[88px] flex items-center justify-center gap-[10px] whitespace-nowrap p-3 border rounded-xl transition-all duration-200 ease-in-out hover:shadow-lg'>
                        <span>{Icon}</span>
                        <span>{name}</span>
                    </div>
                )) : <div className='col-span-full w-full h-full align-middle text-foreground text-xl font-medium'>Coming Soon...</div>}
            </div>
        </div>
    );
};

export default CryptoPlatformsTemp;
