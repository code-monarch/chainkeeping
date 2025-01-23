import React, { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { Exchanges, AccountingApps, Blockchains, Wallets } from '@/lib/data/platforms';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const CryptoPlatformsTemp = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')

    const [integrations, setIntegrations] = useState<{ name: string, Icon: ReactElement }[]>([]);
    const [filteredIntegrations, setFilteredIntegrations] = useState<{ name: string, Icon: ReactElement }[]>([]);
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

    useEffect(() => {
        if (search?.trim()) {
            const lowerCaseSearch = search?.toLowerCase();
            const filtered = integrations.filter(({ name }) =>
                name.toLowerCase() === lowerCaseSearch ||
                name.toLowerCase().startsWith(lowerCaseSearch.slice(0, 2))
            );
            setFilteredIntegrations(filtered);
        } else {
            setFilteredIntegrations(integrations);
        }
    }, [search, integrations]);

    return (
        <div className='w-full h-fit lg:min-h-[920px] flex flex-col items-center justify-start px-[18px] lg:container'>
            <div className='w-fit h-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {filteredIntegrations.length > 0 ? filteredIntegrations.map(({ Icon, name }, idx) => (
                    <div key={idx} className='w-[161.5px] lg:w-[227px] h-[76.41px] lg:h-[88px] flex items-center justify-center gap-2 lg:gap-[10px] whitespace-nowrap p-3 border rounded-xl transition-all duration-200 ease-in-out hover:shadow-lg'>
                        <span>{Icon}</span>
                        <span className='text-sm lg:text-base'>{name}</span>
                    </div>
                )) : <div className='col-span-full w-full h-full align-middle text-foreground text-xl font-medium'>No results found</div>}
            </div>
        </div>
    );
};

export default CryptoPlatformsTemp;
