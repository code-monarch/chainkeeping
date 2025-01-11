"use client";

import React from 'react'
import { useParams } from 'next/navigation';
import GhanaTaxGuideTemp from '@/pattern/resources/templates/ghana-tax-guide-temp';
import NigeriaTaxGuideTemp from '@/pattern/resources/templates/nigeria-tax-guide-temp';

const TaxGuideCountryPage = () => {
    const params = useParams<{ slug: "Nigeria" | "Ghana" }>()

    return (
        <div className='w-full flex flex-col items-center gap-y-[88px] pt-14'>
            {params.slug.toLocaleLowerCase() === "nigeria" ? <NigeriaTaxGuideTemp country={params.slug} /> : <GhanaTaxGuideTemp country={params.slug} />}
        </div>
    )
}

export default TaxGuideCountryPage