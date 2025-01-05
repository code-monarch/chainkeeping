'use client'

import CreateAccountTemp from '@/pattern/auth/templates/create-account-temp'
import { useParams } from 'next/navigation'

const PersonalSignUpPage = () => {
  const params = useParams<{ personal: string }>()
  console.log(params)

  return (
    <>
      <CreateAccountTemp />
    </>
  )
}

export default PersonalSignUpPage