import React from 'react'
import NavListItem from '../molecules/nav-list-item'
import CryptoPlatformsIcon from '../atoms/nav-icons/crypto-platforms-icon'
import AccountingSoftwaresIcon from '../atoms/nav-icons/accounting-softwares-icon'

const IntegrationsNavContent = () => {
    return (
        <div className='bg-inherit w-full h-[164px] grid grid-cols-3 gap-12 mx-auto'>
            {/* Crypto platforms */}
            <div className='w-full flex items-center justify-center'>
                <NavListItem icon={<CryptoPlatformsIcon />} href='/' title='Crypto platforms' description='Connect your Wallets, Exchanges, DeFi platforms.' />
            </div>
            {/* Accounting softwares */}
            <div className='w-full flex items-center justify-center'>
                <NavListItem icon={<AccountingSoftwaresIcon />} href='/' title='Accounting softwares' description='Connect (QuickBooks, Xero, FreshBooks, Sage, ZohoBooks).' />
            </div>
        </div>
    )
}

export default IntegrationsNavContent