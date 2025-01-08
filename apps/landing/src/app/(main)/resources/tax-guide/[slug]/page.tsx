"use client";

import React from 'react'
import JoinUsWidget from '@/pattern/home/templates/join-us-widget';
import TaxGuideHeroSection from '@/pattern/resources/templates/tax-guide-hero-section';
import TaxGuideTemp from '@/pattern/resources/templates/tax-guide-temp';
import { useParams } from 'next/navigation';

const TaxGuideCountryPage = () => {
    const params = useParams<{ slug: "Nigeria" | "Ghana" }>()

    return (
        <div className='w-full flex flex-col items-center gap-y-[88px] mb-[144px]'>
            {params.slug}
            <JoinUsWidget />
        </div>
    )
}

export default TaxGuideCountryPage