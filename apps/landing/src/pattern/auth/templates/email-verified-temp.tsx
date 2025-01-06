import React from 'react'
import Link from 'next/link'
import { z } from "zod";
import { APP_ROUTES } from '@/lib/routes'
import { BrandLogo, Card, CardDescription, CardHeader, CardTitle, SubmitButton } from '@chainkeeping/ui'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import EmailVerifiedIcon from '../atoms/email-verified-icon';

const emailAddress = "example@gmail.com"

const VerifyEmailFormSchema = z.object({
    code: z
        .string()
        .min(4, "First Name is required")
        .max(6, "First Name must not exceed 56 characters")
});

const EmailVerifiedTemp = () => {
    const { push } = useRouter()

    const defaultValues = {
        code: "",
    }

    const form = useForm<z.infer<typeof VerifyEmailFormSchema>>({
        resolver: zodResolver(VerifyEmailFormSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: defaultValues
    })

    const {
        handleSubmit,
        formState: { errors, isDirty },
    } = form

    console.log("ERRORS: ", errors)

    const onSubmit = (data: z.infer<typeof VerifyEmailFormSchema>) => {
        console.log("Submitted: ", data)
        push(APP_ROUTES.verifySignupEmail)
    }
    return (
        <div className='w-fit max-w-[437px] flex flex-col items-center gap-y-8 pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>

            <Card className="bg-white w-[438px] h-fit flex flex-col items-center gap-y-8 p-6 rounded-[8px] card-shadow border-none shadow-none">
                <span><EmailVerifiedIcon /></span>
                <CardHeader className="h-fit flex flex-col items-center gap-y-2 !mt-0">
                    <CardTitle className="text-base font-medium font-sen">Email verified successfully</CardTitle>
                    <CardDescription className="text-sm text-[hsla(215,16%,47%,1)] text-center !mt-0">Your email has been verified successfully, you'll now be redirected to your dashboard shortly.</CardDescription>
                </CardHeader>
                <SubmitButton
                    size="lg"
                    className="w-full text-base font-medium !mt-0"
                >
                    Go to dashboard
                </SubmitButton>
            </Card>
        </div>
    )
}

export default EmailVerifiedTemp