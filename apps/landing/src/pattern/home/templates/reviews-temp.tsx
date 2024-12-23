import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, Typography } from '@chainkeeping/ui'

const reviews = [
    {
        Title: "Super awesome, solved my tax reporting problems",
        description: "Lorem ipsum dolor sit amet consectetur. Vulputate faucibus scelerisque semper suspendisse orci vel mi volutpat. Auctor nisl arcu nisi augue dolor ultricies. Aliquam.",
        name: "Abbas Iqbal",
    },
    {
        Title: "Preparing cryptocurrency taxes was quick and easy",
        description: "Lorem ipsum dolor sit amet consectetur. Vulputate faucibus scelerisque semper suspendisse orci vel mi volutpat. Auctor nisl arcu nisi augue dolor ultricies. Aliquam.",
        name: "Fintan Ibeh",
    },
    {
        Title: "Fast, reliable, and excellent customer service",
        description: "Lorem ipsum dolor sit amet consectetur. Vulputate faucibus scelerisque semper suspendisse orci vel mi volutpat. Auctor nisl arcu nisi augue dolor ultricies. Aliquam.",
        name: "Lewis Ogunleye",
    },
]

const ReviewsTemp = () => {
    return (
        <div className='w-full md:container flex flex-col gap-y-12'>
            <div className='w-full flex flex-col items-start gap-y-6'>
                <div className='lg:w-[406px] text-center space-y-[4px]'>
                    <HeaderLabel className='text-left'>Reviews</HeaderLabel>
                    <Typography className='text-left text-[2.25rem] leading-[42.66px]'>Success stories from our trusted customers</Typography>
                </div>
                <p className='font-dmsans text-base'>Don&apos;t just take our words for it, see what our customers say about Chainkeeping services.</p>
            </div>

            <div className='w-full grid grid-cols-3 gap-6 mx-auto'>
                {reviews.map(({ Title, description, name }, idx) => (
                    <Card key={idx} className="col-span-1 h-[256px] flex flex-col gap-3 p-8 shadow-none">
                        <CardHeader>
                            <CardTitle className='text-xl font-bold font-dmsans'>{Title}</CardTitle>
                        </CardHeader>
                        <CardContent className='text-base text-label font-dmsans !mt-0'>
                            {description}
                        </CardContent>
                        <CardFooter className="flex justify-between text-base text-label font-semibold font-dmsans !mt-0">
                            {name}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ReviewsTemp