'use client'

import { useParams } from 'next/navigation'

const PractitionersSignUpPage = () => {
    const params = useParams<{ practitioners: string }>()
    console.log(params)

    return (
        <>
        </>
    )
}

export default PractitionersSignUpPage