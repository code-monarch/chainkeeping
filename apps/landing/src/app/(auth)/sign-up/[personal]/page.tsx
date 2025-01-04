'use client'

import { useParams } from 'next/navigation'

const PersonalSignUpPage = () => {
  const params = useParams<{ personal: string }>()
  console.log(params)

  return (
    <>
    </>
  )
}

export default PersonalSignUpPage