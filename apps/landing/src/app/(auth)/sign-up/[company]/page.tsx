'use client'

import CreateAccountTemp from '@/pattern/auth/templates/create-account-temp'
import { useParams } from 'next/navigation'

const CompanySignUpPage = () => {
    const params = useParams<{ company: string }>()
    console.log(params)

    return (
        <>
            <CreateAccountTemp />
        </>
    )
}

export default CompanySignUpPage