import React from 'react';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import ImportImage from "@/public/images/howItWorks-import-img.png"
import ReviewImage from "@/public/images/howItWorks-review-img.png"
import DownloadImage from "@/public/images/howItWorks-generate-img.png"

const HowItWorksImage = () => {
    const toggleGroupValue = useSelector((state: RootState) => state.howItWorks.toggleGroupValue);

    const renderImage = () => {
        switch (toggleGroupValue) {
            case 'import':
                return <>
                    <Image
                        src={ImportImage}
                        alt="Import Transactions"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>
            case 'review':
                return <>
                    <Image
                        src={ReviewImage} alt="Review Transactions"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>
            case 'download':
                return <>
                    <Image
                        src={DownloadImage} alt="Download Report"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>
            default:
                return <>
                    <Image
                        src={ImportImage}
                        alt="Import Transactions"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>
        }
    };

    return (
        <div className='bg-muted w-full md:max-w-[589px] h-full min-h-[283.44px] md:max-h-[500px] flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out'>
            <div className="relative w-full max-w-[283.08px] h-[204.44px] md:h-[360px] md:max-w-[500px]">
                {renderImage()}
            </div>
        </div>
    )
};

export default HowItWorksImage;
