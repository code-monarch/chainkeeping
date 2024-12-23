import { FC } from 'react'
import Image, { StaticImageData } from 'next/image';

export interface IInfoCardProps {
    img: StaticImageData,
    title: string;
    description: string
}

const InfoCard: FC<IInfoCardProps> = ({ img, title, description }) => {
    return (
        <div className='w-full max-w-[568px] h-[480px] flex flex-col gap-y-6'>
            <div className='w-full'>
                <Image src={img} alt={title} />
            </div>
            <div className='w-full flex flex-col justify-start gap-y-3'>
                <h5 className='font-rubik font-medium text-2xl text-foreground'>{title}</h5>
                <p className='text-gray-600 text-base leadin-[22px] font-dmsans font-normal'>{description}</p>
            </div>
        </div>
    )
}

export default InfoCard