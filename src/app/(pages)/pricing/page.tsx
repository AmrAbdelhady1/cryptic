import React from 'react'
import HeroBanner from './HeroBanner'
import Plans from '../../../components/Plans/Plans'
import BusinessAccount from '@/components/BusinessAccount/BusinessAccount'
import ReadyBusiness from '@/components/ReadyBusiness/ReadyBusiness'

const page = () => {
  return (
    <div>
      <HeroBanner />
      <Plans />
      <BusinessAccount />
      <ReadyBusiness />
    </div>
  )
}

export default page