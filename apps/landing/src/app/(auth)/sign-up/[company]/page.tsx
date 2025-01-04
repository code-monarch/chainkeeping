'use client'

import { useParams } from 'next/navigation'

const CompanySignUpPage = () => {
    const params = useParams<{ company: string }>()
    console.log(params)

    return (
        <>
        </>
    )
}

export default CompanySignUpPage