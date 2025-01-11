import React, { FC } from 'react';
import Image from 'next/image';
import TaxComputationImage from "@/public/images/tax-computation-img.png"
import PractitionersImage from "@/public/images/for-account-practitioner-img.png"
import PayrollImage from "@/public/images/crypto-payroll-img.png"
import PaymentImage from "@/public/images/crypto-payment-img.png"
import InvoicingImage from "@/public/images/crypto-invoicing-img.png"
import TaxesImage from "@/public/images/Taxes.png"
import OtherIcomeImage from "@/public/images/other-income-img.png"

interface IProps {
    feature: string
}

const FeaturesImage: FC<IProps> = ({ feature }) => {
    const renderImage = () => {
        switch (feature) {
            case "tax-computation":
                return <Image src={TaxComputationImage} alt="Tax Computation" width={408.15} height={318.87} />;

            case "practioners":
                return <Image src={PractitionersImage} alt="Account Practitioners" width={408.15} height={294.68} />;

            case "payroll":
                return <Image src={PayrollImage} alt="Crypto Payroll" width={408.15} height={337.01} />;

            case "payments":
                return <Image src={PaymentImage} alt="Crypto Payment" width={408.15} height={421.84} />;

            case "invoicing":
                return <div className='relative w-full h-full'>
                    <Image src={InvoicingImage} alt="Crypto Invoicing" width={494} height={556.96} className="absolute top-[64.5px] left-[29.14px]" />
                </div>;

            case "reporting":
                return <div className='relative w-full h-full'>
                    <Image src={OtherIcomeImage} alt="Other Income" width={317.37} height={271.64} className="absolute top-[56.99px] left-[79.06px]" />
                    <Image src={TaxesImage} alt="Taxes" width={317.37} height={205.43} className="absolute top-[169.14px] left-[153.52px]" />
                </div>;
            default:
                return <Image src={PractitionersImage} alt="Account Practitioners" width={408.15} height={318.87} className="w-[408.15px] h-[318.87px]" />;
        }
    };

    return <div className="bg-[hsla(240,4%,5%,1)] w-[549.71px] h-[444px] flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out overflow-hidden">{renderImage()}</div>;
};

export default FeaturesImage;
