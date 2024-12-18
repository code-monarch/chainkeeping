import React from 'react'
import Image from 'next/image'
import HeroImage from "@/public/images/hero-img.png";
import BulletListIcon from '../atoms/bullet-list-icon';
import { list } from './join-us-widget';
import { Button } from '@chainkeeping/ui';
import ArrowRightBtnIcon from '../atoms/arrow-right-btn-icon';

const HeroSection = () => {
    return (
        <div className='h-[562px] flex items-start justify-between'>
            <div className='max-w-[546px] h-full flex flex-col gap-y-6'>
                <div className='w-full flex flex-col gap-y-3'>
                    <h2 className='w-full text-[2.75rem] leading-[52.14px] font-rubik font-bold'>Taxation & accounting for crypto made simple and easy.</h2>
                    <p className='text-foreground text-base font-dmsans'>Track and record crypto-transactions, determine gains or losses related to cryptocurrencies within a predetermined time frame, compute the your tax liabilities while maximizing your tax efficiency.</p>
                </div>

                {/* List */}
                <div className='w-full flex flex-col items-start gap-4'>
                    {list.map((item, idx) => (
                        <div className='w-full flex justify-start items-center gap-3'>
                            <BulletListIcon />
                            <p className='text-label text-base font-rubik font-normal'>{item}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className='w-fit flex items-center gap-2'>
                    <Button variant="secondary" size="lg">Compute my taxes <span className='inline-flex ml-2'><ArrowRightBtnIcon /></span></Button>
                    
                    <Button variant="link" className='underline text-foreground'>See sample reports</Button>
                </div>
            </div>
            <Image src={HeroImage} alt='hero image' height={506} width={606} />
        </div>
    )
}

export default HeroSection