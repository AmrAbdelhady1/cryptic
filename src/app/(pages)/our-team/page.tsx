import React from 'react'
import OurTeam from './OurTeam'
import BottomBanner from './BottomBanner'
import HeroBanner from '@/components/HeroBanner/HeroBanner'

const page = () => {
  return (
    <div>
      <HeroBanner
        title="Our talented individuals"
        desc="At Lyxis, we take pride in assembling a team of dedicated
          professionals who are experts in their respective fields. Our team
          members bring a wealth of experience and diverse skills."
        image="/assets/images/pricing/banner-img.webp"
      />
      <OurTeam />
      <BottomBanner />
    </div>
  )
}

export default page