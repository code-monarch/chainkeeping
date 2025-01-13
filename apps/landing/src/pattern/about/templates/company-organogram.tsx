import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import StakeholderCard from '../molecules/stackholder-card'
import AdedejiPhoto from "@/public/company/adedeji-photo.png"
import WinnerPhoto from "@/public/company/winner-photo.png"
import SuleimanPhoto from "@/public/company/suleiman-photo.png"
import UsmanPhoto from "@/public/company/usman-photo.png"
import ZaynabPhoto from "@/public/company/zaynab-photo.png"
import LawalPhoto from "@/public/company/lawal-photo.png"
import CharlesPhoto from "@/public/company/charles-photo.png"
import JoelPhoto from "@/public/company/joel-photo.png"
import OnyinyePhoto from "@/public/company/onyinye-photo.png"
import OlayinkaPhoto from "@/public/company/olayinka-photo.png"

const stakeholders = [
    {
        name: 'Adedeji E. Owonibi',
        position: 'Founder / Project Lead',
        image: AdedejiPhoto,
    },
    {
        name: 'Winner Mugana',
        position: 'Founder / Project Lead',
        image: WinnerPhoto,
    },
    {
        name: 'Suleiman Garba',
        position: 'Co-founder',
        image: SuleimanPhoto,
    },
    {
        name: 'Usman Isah',
        position: 'Co-founder',
        image: UsmanPhoto,
    },
    {
        name: 'Zaynab Adetunji-Momoh',
        position: 'Co-founder',
        image: ZaynabPhoto,
    },
    {
        name: 'Lawal Mohammed',
        position: 'Co-founder',
        image: LawalPhoto,
    },
    {
        name: 'Charles Nnama Okaformbah',
        position: 'CTO',
        image: CharlesPhoto,
    },
    {
        name: 'Omoniyi Olayinka',
        position: 'Project Manager',
        image: OlayinkaPhoto,
    },
    {
        name: 'Joel Adie',
        position: 'Software Engineer',
        image: JoelPhoto,
    },
    {
        name: 'Onyinye Evelyn Eze',
        position: 'Accountant',
        image: OnyinyePhoto,
    },
]

const CompanyOrganogram = () => {
    return (
        <div className='w-full lg:container min-h-[500px] h-fit flex flex-col items-center gap-y-12 pt-[144px]'>
            <div className='w-full space-y-[56px]'>
                <div className='w-full text-center space-y-[4px]'>
                    <HeaderLabel className='text-center'>Our People</HeaderLabel>
                    <Typography className='w-fit text-center text-[2.25rem] leading-[42.66px]'>Meet our super amazing team!</Typography>
                </div>
                <div className='w-full flex items-center justify-evenly gap-x-6 gap-y-12 flex-wrap'>
                    {stakeholders.map(({ image, name, position }, idx) => (
                        <StakeholderCard key={idx} image={image} name={name} position={position} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompanyOrganogram