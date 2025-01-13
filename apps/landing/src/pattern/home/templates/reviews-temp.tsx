import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, ScrollArea, ScrollBar, Typography } from '@chainkeeping/ui'

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
        <div className='w-full flex flex-col gap-y-4 md:gap-y-12 px-[18px] md:container'>
            <div className='w-full flex flex-col items-start gap-y-6'>
                <div className='lg:w-[406px] text-center space-y-[4px]'>
                    <HeaderLabel className='text-left'>Reviews</HeaderLabel>
                    <Typography className='text-left text-2xl md:text-[2.25rem] leading-[28.44px] md:leading-[42.66px] after:w-[225px] after:left-0 md:after:w-[401px]'>Success stories from our trusted customers</Typography>
                </div>
                <p className='font-dmsans text-base'>Don&apos;t just take our words for it, see what our customers say about Chainkeeping services.</p>
            </div>

            <ScrollArea className="w-[300px] md:w-full h-fit pb-3">
                <div className='w-full flex items-center gap-6 mx-auto'>
                    {reviews.map(({ Title, description, name }, idx) => (
                        <Card key={idx} className="w-[284px] md:w-[384px] min-h-[256px] h-fit flex flex-col gap-3 p-8 shadow-none">
                            <CardHeader>
                                <CardTitle className='text-lg md:text-xl font-bold font-dmsans'>{Title}</CardTitle>
                            </CardHeader>
                            <CardContent className='text-sm md:text-base text-label font-dmsans !mt-0'>
                                {description}
                            </CardContent>
                            <CardFooter className="flex justify-between text-base text-label font-semibold font-dmsans !mt-0">
                                {name}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className='md:!hidden' />
            </ScrollArea>
        </div>
    )
}

export default ReviewsTemp