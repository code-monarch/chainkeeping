import React, { FC, ReactElement } from 'react'
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@chainkeeping/ui'
import LearnMoreIcon from '../atoms/learn-more-icon';
import { useRouter } from 'next/navigation';

export interface IWhoWeServeWidgetProps {
    title: string;
    icon: ReactElement
    label: string
    description: string
    href: string
}

const WhoWeServeWidget: FC<IWhoWeServeWidgetProps> = ({ description, href, icon, label, title }) => {
    const { push } = useRouter()
    return (
        <>
            <Card
                className="col-span-1 h-[364pxpx] flex flex-col gap-3 p-8 border-none shadow-none">
                <CardHeader className='w-full flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <span>
                            {icon}
                        </span>

                        <p className='text-xl text-foreground font-dmsans font-medium'>
                            {label}
                        </p>
                    </div>
                    <CardTitle className='text-2xl font-bold font-rubik'>
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className='text-base text-label font-dmsans !mt-0'>
                    {description}
                </CardContent>
                <CardFooter className="flex justify-between text-base text-label font-semibold font-dmsans !mt-0">
                    <Button variant="link" onClick={() => push(href)} className='font-dmsans'>Learn more <span className='inline-flex ml-3'><LearnMoreIcon /></span></Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default WhoWeServeWidget