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
                return <Image src={ImportImage} alt="Import Transactions" width={500} height={360} className="w-[500px] h-[360px]" />;
            case 'review':
                return <Image src={ReviewImage} alt="Review Transactions" width={500} height={360} className="w-[500px] h-[360px]" />;
            case 'download':
                return <Image src={DownloadImage} alt="Download Report" width={500} height={360} className="w-[500px] h-[360px]" />;
            default:
                return <Image src={ImportImage} alt="Import Transactions" width={500} height={360} className="w-[500px] h-[360px]" />;
        }
    };

    return <div className="bg-muted w-[598px] h-[500px] flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out">{renderImage()}</div>;
};

export default HowItWorksImage;
