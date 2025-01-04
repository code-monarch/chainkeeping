import { FC, useState } from 'react'
import { BrandLogo, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@chainkeeping/ui'
import AccountTypeToggleGroup from '../organisms/account-type-toggle-group'
import Link from 'next/link'
import { APP_ROUTES, COMPANY_DASHBOARD_URL, PERSONAL_DASHBOARD_URL, PRACTITIONERS_DASHBOARD_URL } from '@/lib/routes'
import { useRouter } from 'next/navigation'

interface IProps {
    pathname: string
}

const AccountTypeSelectorTemp: FC<IProps> = ({ pathname }) => {
    const [accountType, setAccountType] = useState<"personal" | "company" | "practitioners" | "">("")

    const { push } = useRouter()

    const handleLoginRouting = (accountType: string) => {
        switch (accountType) {
            case 'personal':
                window.open(PERSONAL_DASHBOARD_URL, '_blank');
                break
            case 'company':
                window.open(COMPANY_DASHBOARD_URL, '_blank');
                break
            case 'practitioners':
                window.open(PRACTITIONERS_DASHBOARD_URL, '_blank');
                break
            default:
                window.open(PERSONAL_DASHBOARD_URL, '_blank');
        }
    }

    const handleContinue = () => {
        if (pathname === APP_ROUTES.signup) {
            push(`${APP_ROUTES.signup}/${accountType}`)
        } else (
            handleLoginRouting(accountType)
        )
    }

    return (
        <div className='w-fit flex flex-col items-center gap-y-8 pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>

            <Card className="bg-white w-[438px] h-[542px] flex flex-col gap-y-6 p-6 rounded-[8px] card-shadow border-none shadow-none">
                <CardHeader className="h-[86px] border-b space-y-1 pb-4">
                    <CardTitle className="text-lg font-medium font-sen">Account Type</CardTitle>
                    <CardDescription className="text-sm text-[hsla(215,16%,47%,1)]">Select an account type that best describes you and how you intend to use Chainkeeping.</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                    <AccountTypeToggleGroup accountType={accountType} setAccountType={setAccountType} />

                    <Button
                        size="lg"
                        disabled={!accountType}
                        onClick={handleContinue}
                        className="w-full"
                    >
                        Continue
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default AccountTypeSelectorTemp