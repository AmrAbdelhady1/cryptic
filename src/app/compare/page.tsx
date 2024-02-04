import React from 'react'
import HeroBanner from './HeroBanner'
import BusinessAccount from '@/components/BusinessAccount/BusinessAccount'
import ComparePricing from './ComparePricing'
import StillNotSure from '@/components/StillNotSure/StillNotSure'

const page = () => {
  return (
    <div>
      <HeroBanner />
      <ComparePricing />
      <BusinessAccount />
      <StillNotSure />
    </div>
  )
}

export default page