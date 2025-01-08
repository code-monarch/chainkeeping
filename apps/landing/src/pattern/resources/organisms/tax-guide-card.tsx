import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@chainkeeping/ui'
import NigeriaFlag from '../atoms/nigeria-flag';
import GhanaFlag from '../atoms/ghana-flag';
import SpiralDots from '../atoms/spiral-dots';
import Link from 'next/link';
import { RESOURCES_ROUTES } from '@/lib/routes';

interface IProps {
    title: string;
    description: string;
    country: "Nigeria" | "Ghana"
}

const TaxGuideCard: FC<IProps> = ({ country, description, title }) => {
    const [flag, setFlag] = useState<ReactElement>()

    useEffect(() => {
        if (country) {
            switch (country.toLowerCase()) {
                case 'nigeria':
                    setFlag(<NigeriaFlag />)
                    break
                case 'ghana':
                    setFlag(<GhanaFlag />)
                    break
                default:
                    setFlag(<NigeriaFlag />)
            }
        }
    }, [])

    return (
        <Link href={`${RESOURCES_ROUTES.taxGuide}/${country}`} className='w-full h-fit' >
            <Card className="w-[409px] h-[426px] space-y-0 border-2 border-accent p-0 border-none card-shadow shadow-md">
                <div className='relative bg-primary w-full h-[230px] flex flex-col justify-center items-start py-[42px] px-[32px] rounded-t-[8px]'>
                    <div className='w-full space-y-[10px]'>
                        <div>{flag}</div>
                        <h3 className='text-[2rem] text-white font-rubik font-bold'>Crypto Tax Guide, {country}</h3>
                    </div>
                    <div className='absolute inset-0 w-full h-full'><SpiralDots /></div>
                </div>
                <CardHeader className='w-full pt-6 px-8 pb-4'>
                    <CardTitle className='font-rubik font-medium text-lg leading-[21.33px]'>{title}</CardTitle>
                    <CardDescription className='text-gray-500 text-base font-normal font-dmsans'>{description}</CardDescription>
                </CardHeader>
                <CardFooter className="w-full px-8 pb-6">
                    <p className='w-full  text-gray-300 text-sm text-left font-dmsans font-normal pt-3 border-t'>
                        Last updated: July 4, 2023
                    </p>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default TaxGuideCard