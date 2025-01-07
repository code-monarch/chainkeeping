import { FC, ReactElement } from 'react'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Hidden } from '@chainkeeping/ui';
import { useRouter } from 'next/navigation';

export interface ISupportCardProps {
    Icon: ReactElement;
    title: string;
    description: string;
    href: string
    buttonText: string
}

const SupportCard: FC<ISupportCardProps> = ({ Icon, title, description, href, buttonText }) => {
    const { push } = useRouter()

    return (
        <Card className='w-full max-w-[368px] h-[304px] flex flex-col items-center gap-y-3 p-6 border-none rounded-[8px] card-shadow'>
            <span>{Icon}</span>
            <CardHeader className="w-full max-w-[336px] flex flex-col gap-y-4 text-center !mt-0">
                <CardTitle className='text-2xl font-rubik font-medium'>{title}</CardTitle>
                <CardDescription className='w-full font-dmsans text-[hsla(215,23%,40%,1)] text-base !mt-0'>{description}</CardDescription>
            </CardHeader>
            <Button variant="outline" size="md" onClick={() => push(href)} className='w-full text-base font-medium'>
                {buttonText}
            </Button>
        </Card>
    )
}

export default SupportCard