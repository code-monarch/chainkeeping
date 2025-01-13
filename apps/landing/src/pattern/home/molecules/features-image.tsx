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
                return <>
                    <Image
                        src={TaxComputationImage} alt="Tax Computation"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>

            case "practioners":
                return <>
                    <Image
                        src={PractitionersImage} alt="Account Practitioners"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>

            case "payroll":
                return <>
                    <Image
                        src={PayrollImage} alt="Crypto Payroll"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>

            case "payments":
                return <>
                    <Image
                        src={PaymentImage} alt="Crypto Payment"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>

            case "invoicing":
                return <>
                    <Image
                        src={InvoicingImage} alt="Crypto Invoicing"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </>

            case "reporting":
                return <>
                    <Image src={OtherIcomeImage} alt="Other Income" fill
                        style={{
                            objectFit: 'cover',
                            position: "absolute",
                            top: "0%",
                            left: "0%"
                        }}
                        priority
                    />
                    <Image src={TaxesImage} alt="Taxes" style={{
                        objectFit: 'cover',
                        position: "absolute",
                        top: "45%",
                        left: "25%"
                    }}
                        priority
                    />
                </>;
            default:
                return <>
                    <Image
                        src={PractitionersImage} alt="Account Practitioners"
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
        <div className='bg-[hsla(240,4%,5%,1)] w-full h-full md:max-w-[549.71px] md:h-[444px] flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out overflow-hidden'>
            <div className="relative w-[215.84px] h-[250.18px] md:w-[408.15px] md:h-[318.87px]">{renderImage()}</div>
        </div>
    )
};

export default FeaturesImage;
