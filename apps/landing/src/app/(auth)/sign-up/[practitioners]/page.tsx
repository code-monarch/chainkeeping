'use client'

import CreateAccountTemp from '@/pattern/auth/templates/create-account-temp'
import { useParams } from 'next/navigation'

const PractitionersSignUpPage = () => {
    const params = useParams<{ practitioners: string }>()
    console.log(params)

    return (
        <>
            <CreateAccountTemp />
        </>
    )
}

export default PractitionersSignUpPage