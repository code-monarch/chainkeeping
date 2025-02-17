'use client'

import CreateAccountTemp from '@/pattern/auth/templates/create-account-temp'
import SignUpInformationTemp from '@/pattern/auth/templates/sign-up-information-temp'
import { Hidden } from '@chainkeeping/ui'
import { useSearchParams } from 'next/navigation'

const CompanySignUpPage = () => {
    const searchParams = useSearchParams()

    const isAdditionalInfo = searchParams.get('additional-info')

    return (
        <>
            <Hidden isVisible={!isAdditionalInfo} >
                <CreateAccountTemp />
            </Hidden>
            <Hidden isVisible={!!isAdditionalInfo} >
                <SignUpInformationTemp />
            </Hidden>
        </>
    )
}

export default CompanySignUpPage