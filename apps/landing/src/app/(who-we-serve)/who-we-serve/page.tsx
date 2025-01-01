"use client";

import React from 'react'
import Faqs from '@/pattern/solutions/templates/faqs';
import { accountTaxPractitionerFAQs } from '@/lib/data/faqs';
import AccountingPractitionersHeroSection from '@/pattern/solutions/templates/accounting-practitioners-hero-section';
import AccountingPractitionersInfoSection from '@/pattern/solutions/templates/accounting-practitioners-info-section';

const AccountingPractitionersPage = () => {
    return (
        <>
            <AccountingPractitionersHeroSection />
            <AccountingPractitionersInfoSection />
            <Faqs faqs={accountTaxPractitionerFAQs} />
        </>
    )
}

export default AccountingPractitionersPage